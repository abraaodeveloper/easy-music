import styled from "styled-components";

interface PointerProps{
    x: number;
    y: number; 
}

export const Pointer = styled.div<PointerProps>`
    background-color: #868686;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: ${(props)=> props.x};
    top: ${(props)=> props.y};
`;

export const Neck = styled.div`
    background-color: #cbcfca;
    position: relative;
    width: 100px;
    height: 150px;
    border-radius: 5px;
    margin: 15px;
`;

export const String = styled.div<PointerProps>`
    background-color: #3f3f3f;
    position: absolute;
    width: 2px;
    height: 150px;
    border-radius: 5px;
    left: ${(props)=> props.x}px;
    top: ${(props)=> props.y}px;
`;