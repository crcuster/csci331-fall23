"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page(){
    return <div>
        <CountButton name = "first" mult={1} size={2}/>
        <CountButton name = "second" mult={2} size={0.5}/>
        <hr/>
        <a href = "https://github.com/crcuster/csci331-fall23"> My Github Repo</a>
        <hr/>
        <SearchBar/>
    </div>
}

