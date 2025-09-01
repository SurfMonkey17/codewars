function boolToWord ( bool ) {
    if (bool === true) {
        return "Yes";
    }

    return "No";

}

//could have used a ternary operator here as well:
//return bool ? "Yes" : "No"; 