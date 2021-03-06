import Link from 'next/link';

function NextLink(props) {
	const { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

export default NextLink;
