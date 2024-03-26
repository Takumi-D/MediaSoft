import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function getUrlParameters(Component) {
    return function useFn() {
        var parameters = useParams();
        var navigate = useNavigate();
        return React.createElement(Component, { parameters: parameters, navigate: navigate });
    };
}
export default getUrlParameters;
