import Link from 'next/link'
import React from 'react'
import { Thumbnail } from './atoms'
import utilsStyles from '../../../styles/utils.module.css'
import articleCardStyles from '../../../styles/articleCard.module.css'

const ArticleCard = (props) => {
    const {href, src, alt, width, text_j_xs, text_j_l, text_j_s} = props
    return (
        <li className={`${articleCardStyles.li}`}>
            <Link href={href}>
                <a>
                    <Thumbnail
                    src={src}
                    alt={alt}
                    width={width}
                    />
                </a>
            </Link>
            <div className={`${articleCardStyles.card_text_box}`}>
                <div className={`${utilsStyles.fontset_j_xs} ${articleCardStyles.categories}`}>{text_j_xs}</div>
                <Link href={href}>
                    <a>
                        <div className={`${utilsStyles.fontset_j_l} ${articleCardStyles.card_title}`} >{text_j_l}</div>
                        <br />
                        <span className={utilsStyles.fontset_j_s} >{text_j_s}</span>
                    </a>
                </Link>
            </div>
        </li>
    )
}
export default ArticleCard
