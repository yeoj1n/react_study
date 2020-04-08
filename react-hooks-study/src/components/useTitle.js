import React, { useEffect, useState}  from "react";

const useTitle = (initialState) => {
    const [title, setTitle] = useState(initialState);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerHTML = title;
    }

    useEffect(() => {
        updateTitle(updateTitle, [title])
    })
    return setTitle;
}

export default useTitle;