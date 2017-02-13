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

    var prompts = [{
      type: 'input',
      name: 'solutionName',
      message: 'Insert the name of the solution:',
      default: "Example"
    },{
      type: 'input',
      name: 'author',
      message: 'Insert the Author`s name:'
    },{
      type: 'input',
      name: 'serverPort',
      message: 'Insert the port of the server:',
      default: "5001"
    },{
      type: 'input',
      name: 'entitiesString',
      message: 'Insert entities separated by comas:'
    }
    ];

    return this.prompt(prompts).then(function (props) {
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
