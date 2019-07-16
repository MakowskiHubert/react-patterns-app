import React from 'react';

import { Wrapper } from '../../Wrapper';
import { CustomItem } from './CustomItem';
import { ListView } from './ListView';

export const LayoutComponent = () => (
	<Wrapper>
		<ListView Component={CustomItem}/>
	</Wrapper>
);