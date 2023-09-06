import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  const getMarvel = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "marvel",
        select: "fields",
        //order: "fields.name",
        //"fields.name": "filterName"
      });
      console.log(entries)
      const sanitizedEntries = entries.items.map((item) => {
        const heroImage = item.fields.heroImage.fields;
        return {
          ...item.fields,
          heroImage,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  return { getMarvel };

};

export default useContentful;
