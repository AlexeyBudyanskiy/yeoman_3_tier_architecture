'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the dandy ' + chalk.red('generator-3-tier-architecture') + ' generator!'
    ));

    var configPrompt = [{
      type: 'confirm',
      name: 'useConfig',
      message: 'Do you have a config file?'
    }];

    var prompts = [{
      type: 'input',
      name: 'solutionName',
      message: 'Insert the name of the solution:',
      default: "Example"
    }, {
      type: 'input',
      name: 'author',
      message: 'Insert the Author`s name:'
    }, {
      type: 'input',
      name: 'serverPort',
      message: 'Insert the port of the server:',
      default: "5001"
    }, {
      type: 'input',
      name: 'entitiesString',
      message: 'Insert entities separated by comas:'
    }, {
      type: 'confirm',
      name: 'isWebApi',
      message: 'Would you like to add WebApi functionality?'
    }];

    return this.prompt(configPrompt)
      .then(function (props) {
        if (props.useConfig) {
          
          if(this.config.get("solutionName") == undefined){
            console.log("Error: Invalid config file!")
            return;
          }

          console.log("Getting info from config...");

          props.solutionName = this.config.get("solutionName");
          props.author = this.config.get("author");
          props.serverPort = this.config.get("serverPort");
          props.entitiesString = this.config.get("entitiesString");
          props.isWebApi = this.config.get("isWebApi");

          return props;
        } 
        else {
          return this.prompt(prompts);
        }
      }.bind(this)).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.props = props;

            var entitiesArray = this.props.entitiesString.replace(/\s/g, '').split(',');
            this.props.entitiesArray = entitiesArray;

            var dto = require('./scripts/simple-architecture/dto.js');
            this.dto = dto;

            var bll = require('./scripts/simple-architecture/bll.js');
            this.bll = bll;

            var web = require('./scripts/simple-architecture/web.js');
            this.web = web;
          }.bind(this));
  },

  writing: function () {

    this.dto.generateDto(this, this.props);
    this.bll.generateBll(this, this.props);
    this.web.generateWeb(this, this.props);

  },

  install: function () {
    this.installDependencies();
  }
});
