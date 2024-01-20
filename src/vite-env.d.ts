/// <reference types="vite/client" />

type WordType = {
    word : string,
    meaning : string,
    options : string[];
}

interface StateType {
    loading : boolean;
    results : string[];
    words : WordType[];
    error?: string;
}

interface FetchWordsType {
    translations : {
        text : string
    }[]
}
