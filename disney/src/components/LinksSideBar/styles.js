import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    grid-column:1/2;
    background-color:gray;
`
export const Redirection = styled(Link)`
    font-size:var(--paragraph-size);
    color:white;
`
export const Item = styled.li`
    text-decoration:none;
`
export const List = styled.ul`
    list-style:none;
`