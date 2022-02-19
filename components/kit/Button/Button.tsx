import React from 'react';
import { Button, ButtonProps, CircularProgress, CircularProgressProps } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

interface IButton {
	loading?: boolean;
	error?: boolean;
	halfBorderRadius?: boolean;
}

type Props = IButton & ButtonProps;

const CustomButton: React.FC<Props> = (props) => {
	const { loading, error, halfBorderRadius, ...rest } = props;
	const theme = useTheme();

	const circularProgressColor: CircularProgressProps['color'] =
		rest.variant === 'contained' ? 'inherit' : rest.variant === 'outlined' ? 'primary' : 'primary';

	return (
		<>
			<Button
				{...rest}
				style={Object.assign(
					{},
					error && { borderColor: 'transparent', color: theme.palette.error.main },
					{
						...rest.style,
					},
					halfBorderRadius && { borderRadius: theme.shape.borderRadius / 2 },
				)}
				startIcon={rest.startIcon}
				disabled={rest.disabled || loading}
				endIcon={
					loading ? (
						<CircularProgress
							style={{
								marginLeft: '8px',
							}}
							color={circularProgressColor}
							size={20}
						/>
					) : (
						rest.endIcon &&
						React.cloneElement(
							rest.endIcon as React.ReactElement,
							error
								? {
										fill: theme.palette.error.main,
								  }
								: {},
						)
					)
				}
			>
				{props.children}
			</Button>
		</>
	);
};

export default CustomButton;

CustomButton.defaultProps = {
	fullWidth: true,
};

CustomButton.displayName = 'CustomButton';
