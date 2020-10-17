export default {
  name: "wuerfe",
  title: "Würfe",
  type: "document",
  fields: [
    // ... other fields ...
    {
      name: "name",
      title: "Wurf Buchstabe",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      }
    },
    {
      name: "image",
      type: "image",
      hotspot: true
    },
    {
      name: "beschreibung",
      type: "array",
      of: [{ type: "block" }],
      title: "Beschreibung"
    },
    {
      title: "Welpen",
      name: "welpen",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "welpe" }]
        }
      ]
    }
  ]
};
