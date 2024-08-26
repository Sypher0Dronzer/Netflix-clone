const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					A creation of {" "}
					<a
						href='https://github.com/Sypher0Dronzer'
						target='_blank'
						className='font-medium hover:underline underline-offset-4 hover:text-red-500'
					>
						Sypher Dronzer
					</a>
					. 
				</p>
                <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Link to {" "}
					<a
						href='https://github.com/burakorkmez'
						target='_blank'
						className='font-medium hover:underline underline-offset-4 hover:text-red-500'
					>
						Repository
					</a>
					. 
				</p>
			</div>
		</footer>
	);
};
export default Footer;