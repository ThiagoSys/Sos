import React from 'react'
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Path,
  ClipPath,
  Pattern,
  Use,
  Image,
  Ellipse
} from 'react-native-svg'

const ContrasenaOneAzul = props => (
<Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.7354 14.0691H3.2339C1.9957 14.0691 0.988281 15.0765 0.988281 16.3147V19.7544C0.988281 20.9926 1.9957 22 3.2339 22H18.7354C19.9736 22 20.981 20.9926 20.981 19.7544V16.3147C20.981 15.0765 19.9736 14.0691 18.7354 14.0691ZM6.27579 18.4207L6.10744 18.4754L6.2115 18.6186C6.42081 18.9068 6.35686 19.3103 6.06866 19.5197C5.95419 19.6028 5.82159 19.6429 5.69 19.6429C5.4906 19.6429 5.29388 19.5506 5.16766 19.3769L5.0636 19.2337L4.95953 19.3769C4.83331 19.5506 4.6366 19.6429 4.43719 19.6429C4.3056 19.6429 4.173 19.6028 4.05853 19.5196C3.77034 19.3103 3.70639 18.9068 3.91586 18.6186L4.01976 18.4754L3.85158 18.4207C3.5127 18.3106 3.32722 17.9467 3.43733 17.6078C3.54744 17.2689 3.91116 17.0836 4.25021 17.1936L4.41856 17.2483V17.0714C4.41856 16.715 4.70743 16.4262 5.0636 16.4262C5.41994 16.4262 5.7088 16.715 5.7088 17.0714V17.2483L5.87698 17.1936C6.21603 17.0836 6.57993 17.2689 6.68987 17.6078C6.79997 17.9467 6.61467 18.3106 6.27579 18.4207ZM10.223 18.4207L10.0549 18.4754L10.1588 18.6186C10.3682 18.9068 10.3043 19.3103 10.0161 19.5197C9.90161 19.6028 9.76884 19.6429 9.63742 19.6429C9.43785 19.6429 9.2413 19.5506 9.11508 19.3769L9.01102 19.2337L8.90695 19.3769C8.78073 19.5506 8.58401 19.6429 8.38461 19.6429C8.25302 19.6429 8.12042 19.603 8.00595 19.5197C7.71776 19.3103 7.65381 18.9068 7.86311 18.6186L7.96718 18.4754L7.79883 18.4207C7.45995 18.3106 7.27464 17.9467 7.38475 17.6078C7.49469 17.2689 7.85858 17.0836 8.19763 17.1936L8.36581 17.2483V17.0714C8.36581 16.715 8.65468 16.4262 9.01102 16.4262C9.36719 16.4262 9.65605 16.715 9.65605 17.0714V17.2483L9.8244 17.1936C10.1635 17.0836 10.5272 17.2689 10.6373 17.6078C10.7474 17.9467 10.5619 18.3106 10.223 18.4207ZM14.1705 18.4207L14.0023 18.4754L14.1062 18.6186C14.3156 18.9068 14.2517 19.3103 13.9635 19.5197C13.849 19.6028 13.7163 19.6429 13.5848 19.6429C13.3853 19.6429 13.1887 19.5506 13.0625 19.3769L12.9584 19.2337L12.8544 19.3769C12.7281 19.5506 12.5314 19.6429 12.332 19.6429C12.2004 19.6429 12.0678 19.603 11.9534 19.5197C11.6652 19.3103 11.6012 18.9068 11.8105 18.6186L11.9146 18.4754L11.7462 18.4207C11.4074 18.3106 11.2221 17.9467 11.3322 17.6078C11.4421 17.2689 11.806 17.0836 12.1451 17.1936L12.3132 17.2483V17.0714C12.3132 16.715 12.6021 16.4262 12.9584 16.4262C13.3146 16.4262 13.6035 16.715 13.6035 17.0714V17.2483L13.7718 17.1936C14.1109 17.0836 14.4746 17.2689 14.5847 17.6078C14.6948 17.9467 14.5093 18.3106 14.1705 18.4207ZM18.1179 18.4207L17.9495 18.4754L18.0536 18.6186C18.2631 18.9068 18.1991 19.3103 17.9109 19.5196C17.7964 19.6028 17.6637 19.6429 17.5323 19.6429C17.3327 19.6429 17.136 19.5506 17.0098 19.3769L16.9059 19.2337L16.8018 19.3769C16.6756 19.5506 16.4789 19.6429 16.2793 19.6429C16.1479 19.6429 16.0153 19.603 15.9008 19.5197C15.6124 19.3103 15.5486 18.9068 15.7579 18.6186L15.862 18.4754L15.6937 18.4207C15.3548 18.3106 15.1695 17.9467 15.2794 17.6078C15.3895 17.2689 15.7534 17.0836 16.0923 17.1936L16.2607 17.2483V17.0714C16.2607 16.715 16.5495 16.4262 16.9059 16.4262C17.262 16.4262 17.5509 16.715 17.5509 17.0714V17.2483L17.7192 17.1936C18.0583 17.0836 18.422 17.2689 18.5321 17.6078C18.6422 17.9467 18.4568 18.3106 18.1179 18.4207Z" fill="#3B88FC"/>
<Path d="M7.8134 12.8064H14.1565C14.9771 12.8064 15.6446 12.1387 15.6446 11.3182V5.93405C15.6446 5.11362 14.9771 4.44609 14.1565 4.44609H14.0402V3.05531C14.0403 1.37064 12.6697 0 10.985 0C9.30035 0 7.92972 1.37064 7.92972 3.05531V4.44609H7.8134C6.99297 4.44609 6.32544 5.11362 6.32544 5.93422V11.3182C6.32544 12.1388 6.99297 12.8064 7.8134 12.8064ZM11.6301 8.87859V9.45766C11.6301 9.814 11.3412 10.1029 10.985 10.1029C10.6287 10.1029 10.3398 9.814 10.3398 9.45766V8.87859C10.1208 8.69446 9.98148 8.41869 9.98148 8.11002C9.98148 7.55579 10.4308 7.10663 10.985 7.10663C11.5393 7.10663 11.9884 7.55595 11.9884 8.11002C11.9884 8.41869 11.8491 8.69446 11.6301 8.87859ZM9.21996 3.05531C9.21996 2.08214 10.0117 1.29024 10.985 1.29024C11.9582 1.29024 12.7501 2.08197 12.7501 3.05531V4.44609H9.21996V3.05531Z" fill="#3B88FC"/>
</Svg>
)

export default ContrasenaOneAzul
