export default {
  name: "welpe",
  title: "Welpen",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      title: "Geburts Datum",
      name: "geburtstag",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY"
      }
    },
    {
      name: "gewicht",
      title: "Gewicht gramm",
      type: "number"
    },
    {
      title: "Bild 1",
      name: "image1",
      type: "image",
      fields: [
        {
          name: "beschreibung",
          title: "Beschreibung",
          type: "string",
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ],
      hotspot: true
    },
    {
      title: "Bild 2",
      name: "image2",
      type: "image",
      fields: [
        {
          name: "beschreibung",
          title: "Beschreibung",
          type: "string",
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ],
      hotspot: true
    },
    {
      title: "Bild 3",
      name: "image3",
      type: "image",
      fields: [
        {
          name: "beschreibung",
          title: "Beschreibung",
          type: "string",
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ],
      hotspot: true
    }
  ]
};
