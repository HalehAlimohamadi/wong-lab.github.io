import path from 'path'

import { loadIndex } from '@/lib/pubs'
import { loadYAML } from '@/lib/io'

import Link from 'next/link'
import Image from 'next/image'
import Heading from '@/components/heading'

import parse from 'html-react-parser'


export default function Publications({ pubs, members, ...props }) {
  let memberNamesAndOrcids = new Map(members.flatMap(m => {
    let entries = [[m.name, m.orcid || '']]

    if (m.hasOwnProperty('alt-names'))
      return [...entries, ...m['alt-names'].map(n => [n, m.orcid || ''])]
    
    return entries
  }))

  return (
    <div>
      <Heading.H1 className="font-serif text-5xl pt-14 pb-4">Our Publications</Heading.H1>
      <div className='max-w-prose py-2 ml-10'>
        <ol className='font-sans sm:list-decimal text-sm flex flex-col gap-4 py-2' reversed={true}>
          {pubs.map((pub, i) => (
            <Pub key={`pub-${i}`} pub={pub} memberNamesAndOrcids={memberNamesAndOrcids} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export const encodeDOI = doi => doi
  .replaceAll('/', '~')
  .replaceAll(':', '+')
  .replaceAll('(', '[')
  .replaceAll(')', ']')

function Pub({ pub, memberNamesAndOrcids, ...props }) {
  const { authors, title, container, published: year, URL, doi } = pub
  
  return (
    <li className="space-y-2">
      <h2 className="text-base font-semibold">{parse(title)}</h2>
      <div>
        {authors.map(({ name, orcid }, i) => {
          let actualOrcid = orcid || (memberNamesAndOrcids.has(name) && `http://orcid.org/${memberNamesAndOrcids.get(name)}`) || ''

          return (
            <span
              key={`${props.key}-author-${i}`}
            >
              <span className={memberNamesAndOrcids.has(name) ? "font-bold" : ""}>{name}</span>
              {actualOrcid && (
                <Link href={actualOrcid} className='pl-0.5 select-none'>
                  <Image
                    src="orcid.svg" alt="orcid-icon" width="12" height="12"
                    className='inline-block pb-0.5'
                  />
                </Link>
              )}
              {i != authors.length - 1 && ", "}
            </span>
          )
        })}
      </div>
      <div>
        <span className="italic">{parse(container)}</span>, {year}
      </div>
      <div>
        [ <Link href={URL} className='hover:underline'>paper</Link> ]
        [ <Link href={`/pdf/${encodeDOI(doi)}.pdf`} className='hover:underline'>pdf</Link> ]
      </div>
    </li>
  )
}

export async function getStaticProps(context) {
  let pubs = await loadIndex(path.join(process.cwd(), 'pubs.yaml'))
  let members = await loadYAML(path.join(process.cwd(), 'members.yaml'))

  return {
    props: {
      pubs,
      members
    },
  }
}
