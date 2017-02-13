exports.generateDto = (context, props) => {

  context.fs.copy(
    context.templatePath('WithoutAuthorization/README.md'),
    context.destinationPath(props.solutionName + "/README.md")
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/_SolutionName.sln'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".sln"), {
      SolutionName: props.solutionName
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/EF'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "EF"), {
      SolutionName: props.solutionName,
      Entities: props.entitiesArray
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/Entities/BaseType.cs'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "Entities/" +
      "BaseType.cs"), {
      SolutionName: props.solutionName
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/Entities/Example.cs'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "Entities/" +
      "Example.cs"), {
      SolutionName: props.solutionName
    }
  );

  for (var i = 0; i < props.entitiesArray.length; i++) {
    context.fs.copyTpl(
      context.templatePath('WithoutAuthorization/DAL/Entities/_Template.cs'),
      context.destinationPath(
        props.solutionName +
        "/" +
        props.solutionName +
        ".DAL/" +
        "Entities/" +
        props.entitiesArray[i] +
        ".cs"), {
        SolutionName: props.solutionName,
        Entity: props.entitiesArray[i]
      }
    );
  }

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/Interfaces'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "Interfaces"), {
      SolutionName: props.solutionName,
      Entities: props.entitiesArray
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/Properties'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "Properties"), {
      SolutionName: props.solutionName,
      Author: props.author
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/Repositories'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "Repositories"), {
      SolutionName: props.solutionName
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/UnitsOfWork'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "UnitsOfWork"), {
      SolutionName: props.solutionName,
      Entities: props.entitiesArray
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/App.config'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "App.config"), {
      SolutionName: props.solutionName
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/packages.config'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      "packages.config"), {
      SolutionName: props.solutionName
    }
  );

  context.fs.copyTpl(
    context.templatePath('WithoutAuthorization/DAL/SolutionNameCsProj'),
    context.destinationPath(
      props.solutionName +
      "/" +
      props.solutionName +
      ".DAL/" +
      props.solutionName +
      ".DAL.csproj"), {
      SolutionName: props.solutionName,
      Entities: props.entitiesArray
    }
  );
}
