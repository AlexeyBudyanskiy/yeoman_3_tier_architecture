exports.generateWeb = (context, props) => {

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/App_Start'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/App_Start"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort,
        Entities: props.entitiesArray }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Content'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Content"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Controllers/ExampleController.cs'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Controllers/ExampleController.cs"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Controllers/HomeController.cs'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Controllers/HomeController.cs"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort }
    );

    for(var i = 0; i < props.entitiesArray.length; i++){
      context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Controllers/_ControllerTemplate.cs'),
      context.destinationPath(
        props.solutionName 
        + "/" 
        + props.solutionName 
        + ".WEB/"
        + "Controllers/"
        + props.entitiesArray[i]
        + "Controller.cs"),
      { SolutionName: props.solutionName,
        Entity: props.entitiesArray[i]}
    );
    }

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Filters'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Filters"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Infrastructure'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Infrastructure"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort,
        Entities: props.entitiesArray}
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Properties'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Properties"),
      { SolutionName: props.solutionName,
        Author: props.author  }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Scripts'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Scripts"),
      { SolutionName: props.solutionName }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/ViewModels/ExampleViewModel.cs'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/ViewModels/ExampleViewModel.cs"),
      { SolutionName: props.solutionName }
    );

    for(var i = 0; i < this.props.entitiesArray.length; i++){
      context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/ViewModels/_ViewModelTemplate.cs'),
      context.destinationPath(
        props.solutionName 
        + "/" 
        + props.solutionName 
        + ".WEB/"
        + "ViewModels/"
        + props.entitiesArray[i]
        + "ViewModel.cs"),
      { SolutionName: props.solutionName,
        Entity: props.entitiesArray[i]}
    );
    }

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Views'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/Views"),
      { SolutionName: props.solutionName }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/Common'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort,
        PercentSymbol: "%" }
    );

    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/WEB/SolutionName.WEB.csproj'),
      context.destinationPath(
        props.solutionName 
        + "/"
        + props.solutionName 
        + ".WEB/"
        + props.solutionName
        + ".WEB.csproj"),
      { SolutionName: props.solutionName,
        ServerPort: props.serverPort,
        Entities: props.entitiesArray }
    );
}