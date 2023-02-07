import React from 'react';
import Button from './Button';

import { StyledTextBox } from './styles/TextBox.styled';

const TextBox = () => {
    return (
        <StyledTextBox>
            <div className='text-area'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, molestiae! Quae iste aperiam necessitatibus, nihil fugiat quo dolore repellendus sit voluptatem sunt repellat neque est. Atque ipsam tempora quisquam quasi ab. Repellat accusamus nam deserunt magni assumenda nulla numquam cumque? Totam, accusamus eveniet ut corporis dolorem eos in animi sit veritatis, reiciendis repellendus repudiandae recusandae porro dolor pariatur saepe eligendi, eum necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>

            <div className='button-area'>
                <Button title='Заново' onClickFunction={() => console.log('Заново')}/>
            </div>
        </StyledTextBox>
    );
};

export default TextBox;