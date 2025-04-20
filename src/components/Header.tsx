import { useLanguage } from '../context/LanguageContext';
import { HomeIcon, Menu } from 'lucide-react';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useState } from 'react';

const Header = () => {
	const { language, setLanguage, t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const languages = [
		{ code: 'uk', label: 'UA', flag: '🇺🇦' },
		{ code: 'ru', label: 'RU', flag: '🇷🇺' },
	];

	const menuItems = [
		{ href: '#', label: t('nav.home') },
		{ href: '#about', label: t('nav.about') },
		{ href: '#apartments', label: t('nav.apartments') },
		{ href: '#contact', label: t('nav.contact') },
	];

	const handleMenuClick = (href: string) => {
		setIsOpen(false);
		// Fix for handling the home href
		if (href === '#') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header className='fixed w-full bg-white shadow-md z-50'>
			<div className='container mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='flex items-center'>
					<HomeIcon className='w-8 h-8 mr-3 text-blue-600' />
					<div className='text-2xl font-bold text-blue-600'>Kyiv Homes</div>
				</div>

				<nav className='hidden items-center md:flex space-x-6'>
					{menuItems.map((item) => (
						<a key={item.href} href={item.href} className='hover:text-blue-600 transition-colors'>
							{item.label}
						</a>
					))}
					<Select value={language} onValueChange={setLanguage}>
						<SelectTrigger className='w-[140px]'>
							<SelectValue>
								<span className='flex items-center'>
									{languages.find((lang) => lang.code === language)?.flag}&nbsp;
									{languages.find((lang) => lang.code === language)?.label}
								</span>
							</SelectValue>
						</SelectTrigger>
						<SelectContent>
							{languages.map((lang) => (
								<SelectItem key={lang.code} value={lang.code}>
									<span className='flex items-center'>
										{lang.flag}&nbsp;{lang.label}
									</span>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</nav>

				<Drawer open={isOpen} onOpenChange={setIsOpen}>
					<DrawerTrigger asChild className='md:hidden'>
						<button className='p-2'>
							<Menu className='w-6 h-6' />
						</button>
					</DrawerTrigger>
					<DrawerContent>
						<div className='p-4 space-y-4'>
							{menuItems.map((item) => (
								<DrawerClose asChild key={item.href}>
									<button
										onClick={() => handleMenuClick(item.href)}
										className='w-full text-left py-2 hover:text-blue-600 transition-colors'>
										{item.label}
									</button>
								</DrawerClose>
							))}
							<div className='pt-4 border-t'>
								<Select value={language} onValueChange={setLanguage}>
									<SelectTrigger className='w-full'>
										<SelectValue>
											<span className='flex items-center'>
												{languages.find((lang) => lang.code === language)?.flag}&nbsp;
												{languages.find((lang) => lang.code === language)?.label}
											</span>
										</SelectValue>
									</SelectTrigger>
									<SelectContent>
										{languages.map((lang) => (
											<SelectItem key={lang.code} value={lang.code}>
												<span className='flex items-center'>
													{lang.flag}&nbsp;{lang.label}
												</span>
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	);
};

export default Header;
