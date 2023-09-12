import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  const getContent = async (type) => {
    try {
      const entries = await client.getEntries({
        content_type: type,
        select: "fields",
        //order: "fields.name",
        //"fields.name": "filterName"
      });

      return entries;
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  };

  return { getContent };
};

export default useContentful;
