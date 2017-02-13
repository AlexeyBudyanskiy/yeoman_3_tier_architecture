exports.generateBll = (context, props) => {

    for (var i = 0; i < props.entitiesArray.length; i++) {
        context.fs.copyTpl(
            context.templatePath('WithoutAuthorization/BLL/DTO/_TemplateDto.cs'),
            context.destinationPath(
                props.solutionName
                + "/"
                + props.solutionName
                + ".BLL/"
                + "DTO/"
                + props.entitiesArray[i]
                + "Dto.cs"),
            {
                SolutionName: props.solutionName,
                Entity: props.entitiesArray[i]
            }
        );
    }

    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/DTO/ExampleDto.cs'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "DTO/"
            + "ExampleDto.cs"),
        { SolutionName: props.solutionName }
    );

    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/Exceptions'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "Exceptions"),
        { SolutionName: props.solutionName }
    );

    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/Infrastructure'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "Infrastructure"),
        {
            SolutionName: props.solutionName,
            Entities: props.entitiesArray
        }
    );

    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/Interfaces/IExampleService.cs'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "Interfaces/"
            + "IExampleService.cs"),
        { SolutionName: props.solutionName }
    );

    for (var i = 0; i < props.entitiesArray.length; i++) {
        context.fs.copyTpl(
            context.templatePath('WithoutAuthorization/BLL/Interfaces/_ServiceInterfaceTemplate.cs'),
            context.destinationPath(
                props.solutionName
                + "/"
                + props.solutionName
                + ".BLL/"
                + "Interfaces/"
                + "I" + props.entitiesArray[i]
                + "Service.cs"),
            {
                SolutionName: props.solutionName,
                Entity: props.entitiesArray[i]
            }
        );
    }

    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/Properties'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "Properties"),
        {
            SolutionName: props.solutionName,
            Author: props.author
        }
    );

    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/Services/ExampleService.cs'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "Services/"
            + "ExampleService.cs"),
        { SolutionName: props.solutionName }
    );

    for (var i = 0; i < props.entitiesArray.length; i++) {
        context.fs.copyTpl(
            context.templatePath('WithoutAuthorization/BLL/Services/_ServiceTemplate.cs'),
            context.destinationPath(
                props.solutionName
                + "/"
                + props.solutionName
                + ".BLL/"
                + "Services/"
                + props.entitiesArray[i]
                + "Service.cs"),
            {
                SolutionName: props.solutionName,
                Entity: props.entitiesArray[i]
            }
        );
    }

    context.fs.copy(
        context.templatePath('WithoutAuthorization/BLL/packages.config'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + "packages.config")
    );


    context.fs.copyTpl(
        context.templatePath('WithoutAuthorization/BLL/_SolutionName.BLL.csproj'),
        context.destinationPath(
            props.solutionName
            + "/"
            + props.solutionName
            + ".BLL/"
            + props.solutionName
            + ".BLL.csproj"),
        {
            SolutionName: props.solutionName,
            Entities: props.entitiesArray
        }
    );
}