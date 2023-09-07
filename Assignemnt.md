Tailwind:
Tailwind needs to get configured in each techyou use there is a whole config method under Framework guides.
Since we use Parcel, we will configure selecting the parcel’s configuration.

Steps:

1- Install tailwind and postcss (tailwind behind the scene uses postcss). (npx tailwind init) This will generate a tailwind config file which identifies we use tailwind in our project.

2- .postcss file we will generate.

3- In tailwind config regex kind of expression we will write which says access tailwind anywhere in these folders.

4- Import tailwind in your index.css files.
@tailwind base; @tailwind components; @tailwind utilities;



In tailwind Config what does all keys mean( content,theme,plugin)
Content: In src js ts and all the files defined can access and use utility classes of tailwind.

Theme: In the theme section one can give font family, colors and spacing.

Plugin: Custom plugins of tailwind can be defined in the plugins section.

Why do we need postcss

The postcss.config.js file (or .postcssrc.js if using JSON5 or YAML format) is used to configure and customize the behavior of PostCSS, a popular CSS post-processor. PostCSS allows you to transform and process your CSS using various plugins, which can perform tasks like autoprefixing, minification, linting, and more. Here's why you might have a postcss.config.js file:


Post-processing CSS: PostCSS is used for post-processing CSS files. It takes your CSS code as input and applies various transformations or optimizations to generate the final CSS output. These transformations can include adding vendor prefixes, compressing styles, or optimizing animations, among other things.
Plugin Configuration: PostCSS relies on plugins to perform specific tasks. The postcss.config.js file is used to specify which plugins to use and their configurations. You can customize which plugins are active and how they behave.
Tailwind CSS: If you are using Tailwind CSS, it often requires PostCSS for processing. The postcss.config.js file is used to configure Tailwind CSS and other PostCSS plugins required for your project.
Custom Transformations: You might need to apply custom transformations to your CSS using PostCSS. For example, you might want to write your own PostCSS plugin to handle a specific task unique to your project. The postcss.config.js file allows you to specify and use custom plugins.
Linting: PostCSS can be configured to perform linting tasks as well, checking your CSS code for adherence to coding standards or best practices. You can use linting plugins like stylelint and configure them in your postcss.config.js file.


