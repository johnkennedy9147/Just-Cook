# To do

## Defects - Product

- keyboard selection works in combobox but isnt highlighting - tailwind stripping out default styling?
- selecting already selected ingredient doesnt clear input and restore ingredients filter - not sure if downshift issue or something I caused
- can reduce calls to api by caching certain results

## Defects - tooling

- parcel hot module reloading troublesome, failed often and worse sometimes broke code in strange ways, might only have started after adding downshift

## Content

- add user instructions

## Functionality

- Remove single selected ingredient
- Remove all selected ingredients
- toggle to only show recipes that only need selected ingredients
- exclude common ingredients like water, salt, pepper... from the ingredients selection list and from needing to be selected to allow
- add handling of api call slow / timeout / null returns...
- handle similar ingredients eg 'chicken breast' 'chicken breasts'

## Styling

- layout should be functional on all devices but could be improved using grid + breakpoints to give less columnar layout on wider devices
- colours
- layout shift when recipe extends beyond screen height causing scrollbars to appear

## A11y

- review elements use to maximise semantics

## Testing

- add some
