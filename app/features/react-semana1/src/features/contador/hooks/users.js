function users() {

    function handleinputChange(e, setFunction) {
        setFunction(e.target.value)
    }

    return {
        handleinputChange
    }
}

export default users