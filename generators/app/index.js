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
      message: 'Insert the name of the solution',
      default: "Example"
    },{
      type: 'input',
      name: 'serverPort',
      message: 'Insert the port of the server',
      default: "5001"
    }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    /* DAL --> */


    /*this.fs.copy(
      this.templatePath('WithoutAuthorization/.gitignore'),
      this.destinationPath(this.props.solutionName + "/.gitignore")
    );*/

    this.fs.copy(
      this.templatePath('WithoutAuthorization/README.md'),
      this.destinationPath(this.props.solutionName + "/README.md")
    );

    this.fs.copy(
      this.templatePath('WithoutAuthorization/.vs'),
      this.destinationPath(this.props.solutionName + "/.vs")
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/_SolutionName.sln'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName
        + ".sln"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/EF/_DatabaseContext.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "EF/"
        + "DatabaseContext.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/EF/_StoreDbInitializer.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "EF/"
        + "StoreDbInitializer.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Entities/_BaseType.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Entities/"
        + "BaseType.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Entities/_Example.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Entities/"
        + "Example.cs"),
      { SolutionName: this.props.solutionName }
    );

/*    this.fs.copy(
      this.templatePath('WithoutAuthorization/DAL/Exceptions'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Exceptions")
    );

    this.fs.copy(
      this.templatePath('WithoutAuthorization/DAL/Infrastructure'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Infrastructure")
    ); */

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Interfaces/_IRepository.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Interfaces/"
        + "IRepository.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Interfaces/_IUnitOfWork.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Interfaces/"
        + "IUnitOfWork.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Properties/_AssemblyInfo.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Properties/"
        + "AssemblyInfo.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Repositories/_CommonRepository.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Repositories/"
        + "CommonRepository.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/UnitsOfWork/_UnitOfWork.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "UnitsOfWork/"
        + "UnitOfWork.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/_App.config'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "App.config"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/_packages.config'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "packages.config"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/_SolutionName.DAL.csproj'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + this.props.solutionName
        + ".DAL.csproj"),
      { SolutionName: this.props.solutionName }
    );

 /*this.fs.copy(
      this.templatePath('WithoutAuthorization/DAL/_SolutionName.DAL.csproj.user'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + this.props.solutionName
        + ".DAL.csproj.user")
    );*/

    /* <-- DAL */

    /* BLL --> */

this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/DTO/_ExampleDto.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "DTO/"
        + "ExampleDto.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Exceptions/_EntityException.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Exceptions/"
        + "EntityException.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Exceptions/_EntityNotFoundException.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Exceptions/"
        + "EntityNotFoundException.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Exceptions/_UniqueValueAlreadyExistsException.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Exceptions/"
        + "UniqueValueAlreadyExistsException.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Exceptions/_ValidationException.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Exceptions/"
        + "ValidationException.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Infrastructure/_ServiceModule.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Infrastructure/"
        + "ServiceModule.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Infrastructure/AutomapperRegistration/_DtoToEntityProfile.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Infrastructure/AutomapperRegistration/"
        + "DtoToEntityProfile.cs"),
      { SolutionName: this.props.solutionName }
    );

     this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Infrastructure/AutomapperRegistration/_EntityToDtoProfile.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Infrastructure/AutomapperRegistration/"
        + "EntityToDtoProfile.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Interfaces/_IExampleService.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Interfaces/"
        + "IExampleService.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Properties/_AssemblyInfo.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Properties/"
        + "AssemblyInfo.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Services/_ExampleService.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Services/"
        + "ExampleService.cs"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copy(
      this.templatePath('WithoutAuthorization/BLL/packages.config'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "packages.config")
    );


    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/_SolutionName.BLL.csproj'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + this.props.solutionName
        + ".BLL.csproj"),
      { SolutionName: this.props.solutionName }
    );

 this.fs.copy(
      this.templatePath('WithoutAuthorization/BLL/SolutionName.txt'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + this.props.solutionName
        + ".BLL.csproj.user")
    );
    /*<-- BLL */
  },

  install: function () {
    this.installDependencies();
  }
});
