import styled from 'styled-components';

export const Label = styled.label`
  color: #4674AB;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  display: inline-block;
`

export const Container = styled.div`
  position: relative;
  margin-bottom: 4rem;
`

export const SelectContainer = styled.div`

  .Select * {
    border: none;
  }

  .Select-input > input {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
  }

  .Select-arrow-zone {
    vertical-align: bottom;
    padding-bottom: 1rem;
    padding-right: 9px;
  }

  .Select-option,
  .Select-value-label,
  .Select-input > * {
    font-weight: 300;
    font-size: 1.4rem;
    color: #4875A9 !important;
  }

  .Select-menu-outer {
    border-top: 1px solid #F6F6F6;
  }

  .Select--multi .Select-value {
    background-color: rgb(255, 115, 115);
    border-radius: 2.2rem;
    border: none;
    color: white;
    padding: 0px 0.4rem;
  }

  .Select--multi .Select-value-label {
    border: none;
    color: white !important;
    padding: 0.4rem 0.2rem 0.4rem 0.6rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .Select--multi .Select-value-icon {
    border: none;
    float: right;
    font-size: 1.8rem;
    padding-top: 0.2rem;
    &:hover{
      background: transparent;
      color: pink;
    }

  .Select--multi .Select-multi-value-wrapper {
    padding-top: 3px;
  }
  
  ${''/* .Select-option.is-focused {
    background: rgba(197, 31, 7, 0.09) !important;
  }
  .Select-option.is-selected {
    background: rgba(197, 31, 7, 0.19) !important;
  }*/}
`
