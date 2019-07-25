import styled from 'styled-components';
import { key } from 'styled-theme';
import withTheme from '../../config/themes/withTheme';
import { mediasmAndDown } from '../../config/style-config';

export const Wrapper = withTheme(styled.div`
	display: flex;
	align-items: center;
	padding-left: 7px;
	
	.ant-select-dropdown {
		background: transparent;
		box-shadow: none;
		padding-top: 15px;
		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 5px;
			left: 50%;
			transform: translateX(-50%);
			border-style: solid;
			border-width: 0 15px 20px 15px;
			border-color: transparent transparent ${({ theme }) => theme.palette.bgColor[0]} transparent;
		}
		& > div {
			position: relative;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);	
		}
	}

	.ant-select {
		.ant-select-selection {
			cursor: pointer;
			padding-right: 3px;
			border: none;
			background-color: transparent;
			display: flex;
			align-items: baseline;
			width: 70px;
			justify-content: center;
		}
		.ant-select-selection__rendered {
			display: flex;
			align-items: center;
			justify-content: center;
			line-height: normal;
			margin: 0;
			height: 100%;
		}
		.ant-select-selection-selected-value {
			font-size: 14px;
			line-height: normal;
			padding: 0;
			color: ${({ theme }) => theme.palette.text[0]};
		}
		.ant-select-arrow {
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.arrow};
			top: initial;
			bottom: 35%;
			color: ${({ theme }) => theme.palette.text[0]};
		}
	}

	@media ${mediasmAndDown} {
		padding-left: 0;
		.control {
			display: flex;
			align-items: center;
		}
		.option {
			height: 24px;
			line-height: 24px;
			padding: 0 8px;
			border-right: 1px solid #636363;
			cursor: pointer;
			&:first-child {
				padding-left: 0;
			}
			&:last-child {
				border: none;
			}
			&:hover {
				color: #0E4272;
				font-weight: bold;
			}
		}
	}
	.option {
		&:hover {
			color: ${({ theme }) => theme.palette.text[0]};
			background: #0E4272;
		}
	}
`);

export const OptionContainer = withTheme(styled.div`
	width: 50px;
`);

export const OptionText = withTheme(styled.p`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-size: 14px !important;
	// color: ${({ theme }) => theme.palette.text[0]};
	transition: all .3s ease;
`);

export const dropdownMenuClass = key(
  ['classes', 'topbarDropdownMenu'],
  'topbar-dropdown-menu-default'
)();

export const Label = withTheme(styled.p`
	color: ${({ theme }) => theme.palette.topBar[2]};
`);
