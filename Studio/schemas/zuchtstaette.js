export default {
  name: "zuchtstaette",
  title: "Unsere Zuchtstätte",
  type: "document",
  fields: [
    // ... other fields ...

    {
      title: "The 4 Main Pictures",
      name: "images",
      type: "array",
      of: [{ type: "image" }]
    }
  ]
};
