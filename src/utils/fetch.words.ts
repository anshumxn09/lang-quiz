import axios from "axios";
import { generate } from "random-words";

export const fetchAllWords = async (params: LangType):Promise<WordType[]> => {
  try {
    const words = generate(8).map((i) => ({
      Text: i,
    }));

    const response  = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": `${params}`,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "8ab815fbd2mshb9c2e5298a542b7p12a327jsn9638ebd0ac63",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const receivedWords : FetchWordsType[] = response.data;

    const actualData: WordType[] = receivedWords.map((word, i) => {
        const {translations} = word;
        const meaning = translations[0].text;

        const options:string[] = generate(3);
        const tempIndex = Math.random() * 3;
        options.splice(tempIndex, 0, words[i].Text);

        return {
            word : words[i].Text,
            meaning,
            options
        }
    })

    console.log(actualData);
    
    return actualData;

  } catch (error) {
    console.log(error);
    throw new Error("Some error")
  }
};
