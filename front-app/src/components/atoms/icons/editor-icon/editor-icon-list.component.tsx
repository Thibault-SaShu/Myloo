import {FunctionComponent, ReactNode} from "react";

type EditorIconsType = {
    color : string
}

export enum EDITOR_ICONS {
    ares,
    pdf,
    create,
    edit,
    remove,
    rights,
    update
}

type GetEditorIconType = (icon: EDITOR_ICONS, color: string) => ReactNode

/**
 *Function to create a React element icon for the editor buttons
 * @param icon  the icon you want in the TOPBAR_ICONS enum
 * @param color color to apply on the icon
 * @return to integer in the JSX
 */
const getEditorIcon : GetEditorIconType = (icon , color) =>({
    [EDITOR_ICONS.ares] : AresEditorIcon({color}),
    [EDITOR_ICONS.pdf] : PdfEditorIcon({color}),
    [EDITOR_ICONS.create] : CreateEditorIcon({color}),
    [EDITOR_ICONS.edit] : EditEditorIcon({color}),
    [EDITOR_ICONS.remove] : RemoveEditorIcon({color}),
    [EDITOR_ICONS.rights] : RightsEditorIcon({color}),
    [EDITOR_ICONS.update] : UpdateEditorIcon({color})
}[icon])

export default getEditorIcon

const AresEditorIcon :FunctionComponent<EditorIconsType>= ({color}) => (
        <svg viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.9262 12.6999C15.4865 12.9798 14.9173 13.1773 14.5504 13.3866C14.6821 13.1256 14.8961 12.6082 14.8162 12.2789C16.5471 11.3053 17.3397 7.93039 17.0151 6.31233C16.9375 6.32644 16.2673 7.02963 16.0721 7.07667C16.0039 6.17592 15.1454 4.96002 14.7644 4.57197C15.5617 4.27799 15.8439 4.6731 15.8486 5C16.5189 4.67545 16.0156 4.10395 16.0156 4.10395C16.0156 4.10395 17.3279 2.95155 16.1896 0.616183C15.9803 1.09831 15.5311 1.92615 15.5006 2.04845C15.1548 1.38288 14.5598 1.91204 14.4916 2.09078C15.3618 2.13782 15.2677 3.09502 14.2376 4.01223C13.8778 3.60772 13.0876 1.90969 14.12 2.246C13.8378 1.42051 13.1793 2.03434 13.0829 2.25541C12.9018 1.75682 12.8007 1.76623 12.7583 0.552683C11.2884 2.57761 12.3303 3.95344 12.3632 4.0334C12.1351 4.2874 12.0151 4.78834 12.4832 4.9953C12.5231 4.06397 13.5909 4.82832 13.5909 4.82832C13.5909 4.82832 12.5749 5.98542 12.4103 7.11901C12.1986 6.95673 11.7776 6.58984 11.5283 6.5381C11.3731 7.95626 11.7517 11.3382 13.9225 12.3142C13.9389 12.4506 13.7767 13.8899 12.7536 12.4483C11.9093 11.2582 10.6205 8.40781 10.6205 8.40781C10.6205 8.40781 10.9192 8.51835 10.9686 8.44544C10.7922 8.09972 11.0744 6.73095 10.891 5.94544C11.3519 6.3382 11.787 6.24177 11.787 6.24177C11.787 6.24177 11.3237 5.64205 11.1991 3.68533C11.4013 3.48307 11.7447 3.39135 11.5895 2.94215C11.2155 3.25729 10.8651 2.98683 10.7357 2.82926C11.1191 2.40593 11.0627 1.9826 10.9333 1.67921C10.8722 1.5381 10.3924 1.9238 10.3265 1.68392C10.2771 1.50518 10.7169 0.188149 10.7169 0.188149C10.7169 0.188149 10.5782 0.209315 10.5311 0.209315C10.2089 0.529165 9.66801 0.94544 9.26585 0.00940946C9.21411 0.00470579 9.10593 0.0117613 9.05183 0.016465C8.83782 0.430388 8.34628 0.858422 7.80536 0.206964C7.76538 0.214019 7.69012 0.223426 7.64779 0.246945C7.95117 0.761997 7.99351 1.33584 8.05466 1.6651C7.84299 1.78975 7.69718 1.96378 7.59605 2.1143C7.48081 2.20602 6.93753 2.33537 6.85287 2.54469C6.86698 2.60819 6.99868 2.73754 6.99868 2.73754L7.0269 2.99389C7.0269 2.99389 7.35381 3.20085 7.48551 3.13029C7.49962 3.25494 7.61486 3.51129 7.7207 3.49483C7.71129 3.2667 7.86651 2.95155 7.86651 2.95155C7.86651 2.95155 8.14638 2.94215 8.22634 2.97978C8.52737 3.13265 8.44976 3.73707 8.44976 3.73707C8.44976 3.73707 8.2428 3.55833 8.06171 3.55127C7.58664 3.53011 6.26726 3.79821 6.29313 2.85983C5.25597 3.98166 7.4126 4.09455 7.74892 3.87818C7.61251 4.06397 7.38909 4.30621 7.36557 4.60489C7.64073 4.49201 8.09699 4.63076 8.09699 4.63076C8.09699 4.63076 7.80536 5.19756 7.03866 5.25635C6.99398 5.08702 6.97046 4.94356 6.97046 4.94356C6.97046 4.94356 6.78466 5.13641 6.68118 5.1858C6.34487 4.56491 4.79031 3.31844 4.40696 2.53058C4.28937 2.29069 4.87262 1.95673 4.45635 1.59455C4.52926 1.37347 4.59746 1.04657 4.46576 0.961902C4.43989 1.10066 4.23292 1.2841 4.15061 1.36171C4.12709 1.33349 3.92954 1.07009 3.60969 1.41581C3.52737 1.03246 3.29454 0.85607 3.07582 0.97131C3.05466 0.903107 2.67131 0.540924 2.43377 0.667923C2.49962 0.717312 2.68777 0.919569 2.64544 1.11948C2.37733 1.16651 2.31383 1.38523 2.36557 1.85325C2.29972 1.89088 2.04572 1.9191 2.04337 2.10489C1.79407 2.10489 1.62944 2.26247 1.58711 2.32126C1.65531 2.34243 1.87168 2.42239 1.92577 2.53763C1.77055 2.89511 2.29031 3.41487 2.7254 3.05739C2.81947 3.14911 3.08993 3.41722 3.08993 3.41722C3.08993 3.41722 2.75127 3.67122 2.80536 4.06868C2.76068 4.15099 2.73245 4.17686 2.48551 4.25447C2.50903 4.27329 2.68307 4.37912 2.8571 4.40499C2.93236 4.4144 3.00997 4.4144 3.07112 4.39558C3.11345 4.44497 3.38391 4.73895 3.67554 4.19332C4.3952 4.96708 3.65202 4.95532 3.62615 4.95297C3.68965 5.20461 4.01185 5.30339 4.17883 5.3222C3.77432 5.39981 3.77197 5.92192 3.77197 5.92192L4.16472 5.79963C4.16472 5.79963 4.48927 6.43462 4.87733 6.3429C4.83735 6.44403 4.64685 6.74036 4.75503 6.99201C4.98551 6.82738 5.2301 6.79445 5.44177 6.73566C5.28419 6.9191 5.05607 7.22249 5.29595 7.74224C4.09652 8.45485 3.61674 8.81703 2.95353 8.79821C2.84534 8.67357 2.70423 8.3984 2.40555 8.45249C2.36086 8.09502 1.82229 8.15381 1.74704 8.17263C1.91637 8.25964 1.94929 8.43133 1.954 8.5207C1.87874 8.54892 1.3872 8.63829 1.67178 9.13218C1.46482 9.20508 1.36369 9.38617 1.39426 9.49671C1.35193 9.52728 0.959171 9.5555 0.919189 10.0988C1.00621 10.0447 1.24139 9.96943 1.43189 9.99295C1.41778 10.421 1.80348 10.3457 1.93753 10.3457C1.91637 10.5621 2.06688 10.7408 2.06688 10.7408C2.02926 10.9501 2.18212 11.2088 2.2174 11.2441C2.23151 11.2018 2.37968 10.9478 2.45259 10.9219C2.52079 10.9595 3.35569 11.0442 3.25456 10.2658C3.38862 10.2446 3.68259 10.1976 3.8143 10.174C3.92013 10.4186 4.16472 10.4421 4.18824 10.4468C4.19765 10.5221 4.21176 10.7314 4.20705 10.7714C4.56453 10.7714 4.53396 10.4704 4.57394 10.4233C4.71975 10.4163 4.88203 10.2799 4.86322 9.82597C4.98316 9.79774 5.43236 9.74836 5.63462 9.69426C5.61345 10.0847 5.81101 10.1929 6.13791 10.5292C6.09087 9.94826 6.67413 9.65663 6.67413 9.65663C6.67413 9.65663 6.86463 9.9318 7.04101 10.1246C7.23857 10.0988 7.36086 9.39558 7.36086 9.39558L9.44459 11.0466C9.3905 11.0254 9.00009 10.8913 8.85193 10.9172C9.67272 11.7027 9.51514 11.7592 9.47987 11.8556C7.85945 11.437 5.92154 12.4224 6.48128 11.2676C6.23669 11.2488 5.63932 11.4417 5.81101 11.9802C5.30301 11.9426 4.9079 11.7921 4.1412 12.6999C4.85616 12.5071 5.43941 12.6529 6.14732 12.7728C5.82276 14.6284 4.7174 14.6143 4.2635 14.4614C4.27291 14.2615 4.17648 13.6077 3.83311 13.7418C3.7555 13.4149 3.40037 13.3184 3.31101 13.302C3.34863 13.4854 3.44036 13.5795 3.33217 13.8335C3.14638 13.8429 3.1158 14.0475 3.06171 14.1322C2.76538 14.0569 2.60545 14.104 2.53725 14.2897C2.43847 14.2733 2.13744 14.1816 1.99398 14.5249C2.14685 14.532 2.24562 14.5532 2.39144 14.666C2.28561 15.0282 2.54431 15.2634 2.92766 15.341C2.8524 15.4351 2.73716 15.5433 2.87356 15.7761C2.75127 15.9196 2.82418 16.1971 2.82888 16.2324C2.89238 16.1453 3.08053 16.0913 3.10875 16.0913C3.29219 16.3453 3.76726 16.3429 3.94835 15.8937C4.03537 15.8772 4.18824 15.8631 4.29878 15.8467C4.30113 16.0936 4.44929 16.1877 4.56688 16.2606C4.581 16.4111 4.60451 16.5757 4.5175 16.7051C4.85381 16.7474 4.93142 16.4229 4.9667 16.3664C5.32888 16.3993 5.30771 15.9266 5.30771 15.9266C5.30771 15.9266 5.50056 15.8655 5.56641 15.8655C5.99915 16.5593 6.319 16.2935 6.61533 16.1124C6.55183 15.9831 6.33546 15.8184 6.26961 15.6891C6.60593 15.7173 7.36557 15.7361 7.71129 15.5903C7.30442 15.3246 7.41966 14.2756 7.54196 13.8429C7.93001 13.8029 8.67554 13.8617 9.53866 13.5066C9.50103 14.2662 9.12944 15.3857 8.40038 15.087C8.40038 15.2752 8.40743 15.7455 9.2047 15.4868C8.73198 16.2159 8.96952 16.6628 9.23292 17.1613C9.3952 16.2512 9.82088 16.2065 9.96905 15.5597C10.5594 16.0489 10.8463 16.6557 9.68448 17.7023C9.49868 17.7963 9.04478 17.6246 8.84487 17.9633C8.53208 17.801 8.17695 18.1044 8.14167 18.2761C8.31101 18.2502 8.51797 18.2785 8.64967 18.3702C8.91778 18.6524 8.48975 18.9628 8.71552 19.4026C8.64732 19.539 8.59793 19.8636 8.74139 19.9953C8.80959 19.8636 8.89191 19.786 9.03302 19.6778C9.03302 19.6778 9.55983 20.0588 9.89849 19.3979C9.96905 19.445 10.169 19.579 10.169 19.579C10.216 19.7389 10.343 19.8871 10.3618 19.9177C10.3783 19.8565 10.5758 19.6143 10.6064 19.5649C11.4107 19.2921 11.152 18.7629 10.9592 18.6242C11.2837 18.2008 11.4436 18.5842 11.8011 18.3584C11.8787 18.3843 11.9211 18.4713 11.9305 18.5442C11.9963 18.4619 12.1774 18.1585 11.8787 17.9022C12.1351 17.5988 12.1586 17.2954 12.6666 17.032C12.4502 17.0179 12.1892 16.8909 12.1892 16.8909C12.1892 16.8909 12.8924 16.5875 12.977 16.2206C12.8595 16.1971 12.596 16.2041 12.596 16.2041C12.596 16.2041 13.0335 15.7291 13.1628 15.3928C12.6995 15.5339 11.8928 14.9389 11.5565 14.5649C11.5824 14.2427 11.7071 13.7794 11.573 12.2742C12.2386 13.7159 14.2494 14.2333 14.0307 15.9925C14.9103 15.0823 14.414 14.6566 14.4117 14.2404C15.4018 14.7977 16.2767 14.0405 16.2767 14.0405L14.8985 13.7041C14.8985 13.7041 15.8816 13.5183 15.9262 12.6952V12.6999ZM14.2094 9.03575C14.1177 9.33443 14.073 9.98589 13.8402 10.3387C12.6219 8.59596 13.0006 6.27705 14.1294 5.16933C15.4135 6.11477 15.3477 9.08749 14.8867 10.2187C14.8726 10.2493 14.7503 10.2281 14.7503 10.2281C14.7503 10.2281 14.6492 9.31091 14.2094 9.03575Z"
                  fill={color}/>
        </svg>
    )

const PdfEditorIcon : FunctionComponent<EditorIconsType> = ({color}) =>(
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_161_980)">
                <path d="M1.61563 19.7531C1.02297 19.7531 0.644324 19.4167 0.477344 19.2239L0.413844 19.1486L0.373863 19.0593C-0.0188933 18.2079 -0.192929 16.8768 1.20641 15.3763C2.34705 14.151 4.25204 13.0974 6.41102 12.2977C7.14009 10.9337 7.82212 9.48025 8.37245 8.08796C6.99428 5.79257 6.42513 3.37489 7.00604 1.78034C7.33294 0.884293 8.00792 0.319853 8.90867 0.192854L9.0051 0.185799C9.99287 0.185799 10.7008 0.776109 10.9501 1.80151C11.2864 3.18204 10.809 5.45861 9.90585 7.93274C10.2492 8.44309 10.642 8.95108 11.0865 9.44732C11.5051 9.95297 11.9331 10.4139 12.3612 10.8255C14.6871 10.5174 16.8014 10.5668 18.1185 11.0654C19.6048 11.6251 19.8518 12.627 19.8682 13.175V13.1891C19.8753 14.0663 19.4355 14.7342 18.6594 15.0165C17.046 15.6068 14.3461 14.452 11.9096 12.2836C10.4138 12.5259 8.84282 12.9163 7.37998 13.4196C5.75956 16.3429 3.91808 18.7959 2.56107 19.4967C2.20124 19.6825 1.88374 19.7531 1.61328 19.7531H1.61563ZM1.5733 18.3608C1.62504 18.3819 1.72146 18.3772 1.93078 18.2691C2.82918 17.8057 4.06624 16.2535 5.28685 14.2592C4.0051 14.8612 2.9209 15.555 2.21535 16.3147C1.28873 17.3095 1.4416 18.0245 1.5733 18.3584V18.3608ZM13.7958 12.0532C15.7055 13.4878 17.4247 13.9981 18.1867 13.7206C18.3348 13.6665 18.49 13.5771 18.49 13.2056C18.4853 13.0527 18.4618 12.667 17.634 12.3542C16.7379 12.0155 15.3645 11.9309 13.7958 12.0532ZM9.30613 9.45908C8.99569 10.1999 8.65232 10.9478 8.29014 11.6792C9.08741 11.4487 9.89879 11.2535 10.7008 11.096C10.4773 10.8537 10.2563 10.6021 10.0423 10.3457C9.78355 10.0564 9.53661 9.76012 9.30613 9.45908ZM9.05448 1.56162C8.80989 1.60395 8.48769 1.73331 8.3019 2.24836C7.97734 3.1397 8.20312 4.66839 9.00039 6.34525C9.56718 4.58843 9.83764 3.05974 9.61187 2.12606C9.49428 1.64158 9.28496 1.57103 9.05684 1.56397L9.05448 1.56162Z"
                      fill={color}/>
            </g>

        </svg>
    )

const CreateEditorIcon : FunctionComponent<EditorIconsType> = ({color}) =>(
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_132_953)">
                <path d="M10 1L10 19" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M19 10L1 10" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
            </g>
        </svg>
    )


const EditEditorIcon : FunctionComponent<EditorIconsType> = ({color}) =>(
        <svg  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_132_954)">
                <path d="M0.895986 19.9483L5.56908 18.603C6.07943 18.4572 6.24406 17.8151 5.87012 17.4389L2.53992 14.1087C2.16362 13.7324 1.52393 13.8993 1.37576 14.4097L0.0328624 19.0851C-0.117655 19.6119 0.369175 20.1011 0.895986 19.9483Z"
                      fill={color}/>
                <path d="M16.8935 6.58111L13.3813 3.06882C13.1281 2.81565 12.7335 2.79979 12.4999 3.03339L3.25208 12.2812C3.01847 12.5148 3.03434 12.9094 3.28751 13.1626L6.79979 16.6749C7.05297 16.928 7.44758 16.9439 7.68119 16.7103L16.929 7.4625C17.1626 7.22889 17.1467 6.83428 16.8935 6.58111Z"
                      fill={color}/>
                <path d="M17.3301 0.500644L19.4271 2.59768C20.079 3.24958 20.079 4.31057 19.4271 4.96247L18.5973 5.7923C18.3461 6.04342 17.9404 6.04342 17.6893 5.7923L14.1338 2.23681C13.8827 1.9857 13.8827 1.57993 14.1338 1.32882L14.9636 0.498981C15.6155 -0.152914 16.6765 -0.152915 17.3284 0.49898L17.3301 0.500644Z"
                      fill={color}/>
            </g>
        </svg>
    )

const RemoveEditorIcon : FunctionComponent<EditorIconsType> = ({color}) =>(
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_244_1500)">
                <path d="M7.94214 8.75823V16.3382" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M12.0579 8.75823V16.3382" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M3.20093 7.0508V16.4464C3.20093 18.0362 4.48973 19.3274 6.08193 19.3274H13.9182C15.5081 19.3274 16.7992 18.0386 16.7992 16.4464V7.0508"
                      stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M0.665527 6.13829V5.80433C0.665527 4.87535 1.41811 4.12276 2.34709 4.12276H17.6505C18.5794 4.12276 19.332 4.87535 19.332 5.80433V6.13829"
                      stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M6.85791 4.12276V1.82973C6.85791 1.19003 7.37531 0.672623 8.01501 0.672623H11.9849C12.6246 0.672623 13.142 1.19003 13.142 1.82973V4.12041"
                      stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
            </g>
        </svg>

    )

const RightsEditorIcon : FunctionComponent<EditorIconsType> = ({color}) =>(
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3335 9.30621H15.8396V5.86313C15.8396 2.64347 13.2197 0.0235214 10 0.0235214C6.78037 0.0235214 4.16278 2.64347 4.16278 5.86313V9.30621H3.66889C2.56353 9.30621 1.66748 10.2023 1.66748 11.3053V17.9727C1.66748 19.0781 2.56353 19.9718 3.66889 19.9718H16.3335C17.4389 19.9718 18.3349 19.0781 18.3349 17.9727V11.3053C18.3349 10.2023 17.4389 9.30621 16.3335 9.30621ZM5.33869 5.86313C5.33869 3.29257 7.42947 1.19944 10 1.19944C12.5706 1.19944 14.6637 3.29257 14.6637 5.86313V9.30621H5.33869V5.86313ZM10 16.3829C8.92054 16.3829 8.04566 15.508 8.04566 14.4262C8.04566 13.3443 8.92054 12.4718 10 12.4718C11.0795 12.4718 11.9568 13.3467 11.9568 14.4262C11.9568 15.5056 11.0819 16.3829 10 16.3829Z"
                  fill={color}/>
        </svg>

    )

const UpdateEditorIcon : FunctionComponent<EditorIconsType> = ({color}) =>(
        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_195_1667)">
                <path d="M18.6878 13.1538C17.3825 16.6886 13.9817 19.2098 9.99303 19.2098C4.87544 19.2098 0.726807 15.0611 0.726807 9.94356H6.46999"
                      stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.31226 6.84619C2.61752 3.31138 6.01828 0.790215 10.007 0.790215C15.1246 0.790215 19.2732 4.93885 19.2732 10.0564H13.53"
                      stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            </g>
        </svg>
    )
