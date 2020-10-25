// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import wuerf from "./wuerf";
import welpe from "./welpe";
import zuchtstaette from "./zuchtstaette";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    wuerf,
    welpe,
    zuchtstaette
    //I am going to make a Schema Doc for each Page of the website, so each page can be unique.
    //Then you can add new versions of the page and set the one that is current
  ])
});
