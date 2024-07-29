# React Ladder Architecture

# Introduction

We often overthink about what architecture we should use in our React applications. The docs says "make reusable components and be organized". But how should we organize our components? How should we structure our codebase?

The ladder architecture is a simple and effective way to organize your components in an flexible hierarchy where each component has a specific role and responsibility. This makes it easier to maintain your codebase.

# Components

There are two types of components in the ladder architecture: Slotted Components and Composed Components.

## Slotted Components

The Slotted Components are in charge of the layout of the page. They are the ones that define the structure of the page and have "slots" where other components can be placed. The "slots" are props that are passed to the Slotted Component.

Commonly, the Slotted Components don't have children, **don't have instantiations of other components**, don't have data and **don't have behavior**. They only receive React Nodes as props and render them in the right place.

```jsx
/**
 * @param {object} props
 * @param {ReactElement} props.north
 * @param {ReactElement} props.center
 * @param {ReactElement} props.south
 * @returns {ReactElement}
 */
function Layout(props) {
  return (
    <div className="layout">
      <div className="north">{props.north}</div>
      <div className="center">{props.center}</div>
      <div className="south">{props.south}</div>
    </div>
  );
}
```

## Composed Components

The Composed Components are built of one (1) Slotted Component and any other Composed Components. This means that the Composed Components holds one Slotted Component instance that is filled with other Composed Components instances. The Composed Components are the ones that have data, logic and behavior.

```jsx
/**
 * @param {object} props
 * @returns {ReactElement}
 */
function Article(props) {
  return (
    // Slotted Component
    <ArticleLayout

      // Composed Component
      header={<ArticleHeader title={props.title} />}

      // Composed Component
      figure={<ArticleFigure src={props.image.src} alt={props.image.alt} />}

      // Composed Component
      text={<ArticleContent text={props.text} />}

    />
  );
}
```

# The Ladder

The ladder is made by the recursive interaction between the Composed Components.

Graphically, the ladder looks like this:

```yml
# Instances hierarchy:

- Page Compossed Component:
  - PageLayout Slotted Component  # slots: props.north, props.center, props.south
  - PageTop Composed Component:
    - NavMenu Slotted Component  # slots: props.items
    - NavMenuItem Composed Component # Home (yes, they are created inside of PageTop instead of NavMenu layout componet)
    - NavMenuItem Composed Component # About
    - NavMenuItem Composed Component # Contact
  - PageCenter Composed Component:
    ...
  - PageBottom Composed Component:
    ...
```

## Ladder Steps

Each ladder step is the combination of three concepts:
1. the root (must be a composed component)
2. any composed components
3. one slotted component

In order to add new steps to the ladder, you just need to:
1. identify the root component
2. create composed components instances
3. create a slotted component instance and fill it with the composed components instances

```yml
# Instances hierarchy:

- Page Compossed Component:
  - PageLayout Slotted Component
  - PageTop Composed Component: # <- here is my change root (step 1)
    - PageHeaderLayout Slotted Component # <- my new slotted component (step 3)
    - PageHeaderNavigation: # <- my new composed component for navigation (step 2)
      - NavMenu Slotted Component # >>
      - NavMenuItem Composed Component # >>
      - NavMenuItem Composed Component # >>
      - NavMenuItem Composed Component # >>
    - PageHeaderSearch: # <- they ask me to add a search bar (step 2)
      ...
  - PageCenter Composed Component:
    ...
  - PageBottom Composed Component:
    ...
```

## Object Oriented CSS

Due to the nature of the ladder architecture, the Object Oriented CSS is a good fit for styling your components. In this way, the JSX and the CSS can be moved together when a Step is created or removed.

# Application

The Ladder Architecture is a simple and effective way to organize your components thinking in a flexible structure that can be easily maintained and scaled.

Remember that the Ladder Architecture defines the instances hierarchy of your components, not your directory structure. You can organize your components in any way you want.

Disadvantages:
- **The ladder architecture is not a silver bullet**: It is not the best solution for all cases. Always evaluate the project needs.
- **May be too many components**: The ladder architecture tries not to touch the already created components. This means that changes often will require the creation of new components.
- **May be too many divs**: The ladder architecture uses a lot of divs to separate the components. This can be solved with React Fragments but you will encounter the HTML code more verbose.
