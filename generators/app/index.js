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
    },{
      type: 'input',
      name: 'entitiesString',
      message: 'Insert entities separated by comas'
    }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      var entitiesArray = this.props.entitiesString.replace(/\s/g, '').split(',');
      this.props.entitiesArray = entitiesArray;
    }.bind(this));
  },

  writing: function () {

    /* DAL --> */

    this.fs.copy(
      this.templatePath('WithoutAuthorization/README.md'),
      this.destinationPath(this.props.solutionName + "/README.md")
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
      this.templatePath('WithoutAuthorization/DAL/EF'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "EF"),
      { SolutionName: this.props.solutionName,
        Entities: this.props.entitiesArray }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Entities/BaseType.cs'),
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
      this.templatePath('WithoutAuthorization/DAL/Entities/Example.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Entities/"
        + "Example.cs"),
      { SolutionName: this.props.solutionName }
    );

    for(var i = 0; i < this.props.entitiesArray.length; i++){
      this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Entities/_Template.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Entities/"
        + this.props.entitiesArray[i]
        + ".cs"),
      { SolutionName: this.props.solutionName,
        Entity: this.props.entitiesArray[i]}
    );
    }

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
      this.templatePath('WithoutAuthorization/DAL/Interfaces'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Interfaces"),
      { SolutionName: this.props.solutionName,
        Entities: this.props.entitiesArray }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Properties'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Properties"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/Repositories'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "Repositories"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/UnitsOfWork'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "UnitsOfWork"),
      { SolutionName: this.props.solutionName,
        Entities: this.props.entitiesArray }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/App.config'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "App.config"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/packages.config'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + "packages.config"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/DAL/SolutionNameCsProj'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".DAL/"
        + this.props.solutionName
        + ".DAL.csproj"),
      { SolutionName: this.props.solutionName,
        Entities: this.props.entitiesArray }
    );

    /* <-- DAL */

    /* BLL --> */
    for(var i = 0; i < this.props.entitiesArray.length; i++){
      this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/DTO/_TemplateDto.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "DTO/"
        + this.props.entitiesArray[i]
        + "Dto.cs"),
      { SolutionName: this.props.solutionName,
        Entity: this.props.entitiesArray[i]}
    );
    }

this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/DTO/ExampleDto.cs'),
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
      this.templatePath('WithoutAuthorization/BLL/Exceptions'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Exceptions"),
      { SolutionName: this.props.solutionName }
    );
  
    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Infrastructure'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Infrastructure"),
      { SolutionName: this.props.solutionName,
        Entities: this.props.entitiesArray }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Interfaces/IExampleService.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Interfaces/"
        + "IExampleService.cs"),
      { SolutionName: this.props.solutionName }
    );

        for(var i = 0; i < this.props.entitiesArray.length; i++){
      this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Interfaces/_ServiceInterfaceTemplate.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Interfaces/"
        + "I" + this.props.entitiesArray[i]
        + "Service.cs"),
      { SolutionName: this.props.solutionName,
        Entity: this.props.entitiesArray[i]}
    );
    }

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Properties'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Properties"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Services/ExampleService.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Services/"
        + "ExampleService.cs"),
      { SolutionName: this.props.solutionName }
    );

    for(var i = 0; i < this.props.entitiesArray.length; i++){
      this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/BLL/Services/_ServiceTemplate.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".BLL/"
        + "Services/"
        + this.props.entitiesArray[i]
        + "Service.cs"),
      { SolutionName: this.props.solutionName,
        Entity: this.props.entitiesArray[i]}
    );
    }

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
      { SolutionName: this.props.solutionName,
        Entities: this.props.entitiesArray }
    );
    /*<-- BLL */

    /* WEB -->*/

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/App_Start'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/App_Start"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort,
        Entities: this.props.entitiesArray }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Content'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Content"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Controllers/ExampleController.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Controllers/ExampleController.cs"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Controllers/HomeController.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Controllers/HomeController.cs"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort }
    );

    for(var i = 0; i < this.props.entitiesArray.length; i++){
      this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Controllers/_ControllerTemplate.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".WEB/"
        + "Controllers/"
        + this.props.entitiesArray[i]
        + "Controller.cs"),
      { SolutionName: this.props.solutionName,
        Entity: this.props.entitiesArray[i]}
    );
    }

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Filters'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Filters"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Infrastructure'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Infrastructure"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort,
        Entities: this.props.entitiesArray}
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Properties'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Properties"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Scripts'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Scripts"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/ViewModels/ExampleViewModel.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/ViewModels/ExampleViewModel.cs"),
      { SolutionName: this.props.solutionName }
    );

    for(var i = 0; i < this.props.entitiesArray.length; i++){
      this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/ViewModels/_ViewModelTemplate.cs'),
      this.destinationPath(
        this.props.solutionName 
        + "/" 
        + this.props.solutionName 
        + ".WEB/"
        + "ViewModels/"
        + this.props.entitiesArray[i]
        + "ViewModel.cs"),
      { SolutionName: this.props.solutionName,
        Entity: this.props.entitiesArray[i]}
    );
    }

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Views'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/Views"),
      { SolutionName: this.props.solutionName }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/Common'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort,
        PercentSymbol: "%" }
    );

    this.fs.copyTpl(
      this.templatePath('WithoutAuthorization/WEB/SolutionName.WEB.csproj'),
      this.destinationPath(
        this.props.solutionName 
        + "/"
        + this.props.solutionName 
        + ".WEB/"
        + this.props.solutionName
        + ".WEB.csproj"),
      { SolutionName: this.props.solutionName,
        ServerPort: this.props.serverPort,
        Entities: this.props.entitiesArray }
    );
    /*<-- WEB */
  },

  install: function () {
    this.installDependencies();
  }
});
