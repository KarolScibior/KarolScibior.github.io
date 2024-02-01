import { useState } from "react"

type Lang = "PL" | "EN"
type TabProps = { lang: Lang }

export const Page = () => {
	const [tab, setTab] = useState(0)
	const [lang, setLang] = useState<Lang>("EN")

	return (
		<div className='bg-gray-900 py-24 sm:py-32 h-screen flex items-center justify-center'>
			<div className='relative isolate'>
				<div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20 relative'>
						<button
							type='button'
							onClick={() => {
								setLang(prev => (prev === "PL" ? "EN" : "PL"))
							}}
							className='rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 absolute right-7 top-7'
						>
							{lang}
						</button>
						<img
							className='h-96 w-full flex-none rounded-2xl object-scale-down shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm'
							src='/karek.png'
							alt=''
						/>
						<div className='w-full flex-auto'>
							{tab === 0 && <Tab1 lang={lang} />}
							{tab === 1 && <Tab2 lang={lang} />}
							{tab === 2 && <Tab3 lang={lang} />}
						</div>
						<button
							type='button'
							onClick={() => {
								setTab(prev => (prev === 2 ? 0 : prev + 1))
							}}
							className='rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 absolute right-7 bottom-7'
						>
							<span aria-hidden='true'>&rarr;</span>
						</button>
					</div>
				</div>
				<div
					className='absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl'
					aria-hidden='true'
				>
					<div
						className='aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25'
						style={{
							clipPath:
								"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
						}}
					/>
				</div>
			</div>
		</div>
	)
}
const links = {
	Github: "https://github.com/KarolScibior",
	Linkedin: "https://www.linkedin.com/in/karol-%C5%9Bcibior-280430189/",
	Twitter: "https://twitter.com/KarolScibior",
	Blog: "https://dogtronic.io/author/karolus/",
}

const Tab1 = ({ lang }: TabProps) => (
	<>
		<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
			Full-Stack Developer
		</h2>
		<p className='mt-6 text-lg leading-8 text-gray-300'>
			{lang === "PL"
				? "Cześć, nazywam się Karol Ścibior i prowadzę działalność programistyczną NodeDog. Moja firma zajmuje się się technologiami webowymi, DevOps oraz projektowaniem i zarządzaniem projektami informatycznymi od 2020 roku."
				: "Hi, my name is Karol Scibior and I run a software development business called NodeDog. My company deals with web technologies, DevOps and design and management of IT projects since 2020."}
		</p>
		<ul className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2'>
			{Object.entries(links).map(([key, value]) => (
				<li key={key} className='flex gap-x-3'>
					<a
						href={value}
						className='text-sm font-semibold leading-6 text-indigo-400'
						target='_blank'
						rel='noreferrer'
					>
						{key}
					</a>
				</li>
			))}
		</ul>
	</>
)

const technologies = [
	"TypeScript",
	"Node.js",
	"React",
	"Next.js",
	"Nest.js",
	"Express.js",
	"Docker",
	"Github Actions",
	"React Native",
	"Strapi",
	"Tailwind",
	"MySQL",
	"PostgreSQL",
	"MongoDB",
	"Google Cloud Platform",
]

const Tab2 = ({ lang }: TabProps) => (
	<>
		<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
			{lang === "PL" ? "Technologie" : "Technologies"}
		</h2>
		<p className='mt-6 text-lg leading-8 text-gray-300'>
			{lang === "PL"
				? "Na codzień zajmuje się głównie programowaniem w TypeScript oraz automatyzacją procesów w projektach, nie jest mi jednak obca praca z klientem ani zarządzanie zespołem."
				: "On a day-to-day basis, I mainly program in TypeScript and automate processes in projects, but I am no stranger to working with clients or managing a team."}
		</p>
		<div className='mt-10 flex gap-4 flex-wrap'>
			{technologies.map(technology => (
				<span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
					{technology}
				</span>
			))}
		</div>
	</>
)

const Tab3 = ({ lang }: TabProps) => (
	<>
		<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
			{lang === "PL" ? "Kontakt" : "Contact"}
		</h2>
		<p className='mt-6 text-lg leading-8 text-gray-300'>
			{lang === "PL"
				? "Masz problem z którym nie możesz sobie poradzić? Chcesz się podzielić swoim pomysłem na projekt? A może po prostu chcesz się przywitać?"
				: "Do you have a problem you can't handle? Want to share your project idea? Or maybe you just want to say hello?"}
		</p>
		<div className='mt-10 flex'>
			<a
				href='mailto:karol.scibior98@gmail.com'
				className='text-sm font-semibold leading-6 text-indigo-400'
			>
				{lang === "PL" ? "Napisz do mnie!" : "Contact me!"}
			</a>
		</div>
	</>
)
