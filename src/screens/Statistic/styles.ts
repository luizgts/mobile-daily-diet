import styled, { css } from "styled-components/native";

export const Title = styled.Text`
    text-align: center;
    margin-top: 52px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.LG}px;
        color: ${theme.COLOR.GRAY_100};
    `};
`;

export const SubTitle = styled.Text`
    text-align: center;
    margin-bottom: 37px;
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        color: ${theme.COLOR.GRAY_200};
    `};
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLOR.GRAY_100};
    `}
    text-align: center;
    margin-bottom: 27px;
`;
