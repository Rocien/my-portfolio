## App details

This is my own portfolio, a page that showcases my work.
This portfolio page is a single page that contain the following sections:

- A header with external links to social media accounts and internal links to other sections of the page
- A landing section with a picture and a short bio
- A section to display your featured projects as cards in a grid fashion
- A contact me section with a form to allow visitors to contact me


### Libraries
Here i use an open source libraries that helped me to have a more polished and professional looking page
#### Chakra UI

Chakra UI comes pre-configured with this project, so i don't have to worry about installing it or setting it up.

The components from this library i will need to use are already imported from the `@chakra-ui/react` package at the top of each corresponding file.
If you don't see a component already imported, it's because i probably won't need it.
In any case, feel free to check their official [documentation](https://chakra-ui.com/docs/components) to see all the components at my disposal and their corresponding props.

#### Formik and Yup

The Formik library is already set up in the project as well, so no extra configuration is needed.
In this project, i will be only using the `useFormik` hook from the Formik library, as well as the global `Yup` object to define the Contact Me form validation rules.

The form UI will be implemented using Chakra UI components.


The app outputs a page with an empty header, 3 different full-height sections and a footer.
Every section has a different background color.


### Author

Rocien Nkunga

