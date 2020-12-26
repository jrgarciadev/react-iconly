import React, { Suspense } from 'react'

const icons = {
  Search: React.lazy(() => import('../Icons/Search')),
  Folder: React.lazy(() => import('../Icons/Folder')),
  Wallet: React.lazy(() => import('../Icons/Wallet')),
  Graph: React.lazy(() => import('../Icons/Graph')),
  Bookmark: React.lazy(() => import('../Icons/Bookmark')),
  Category: React.lazy(() => import('../Icons/Category')),
  Home: React.lazy(() => import('../Icons/Home')),
  Notification: React.lazy(() => import('../Icons/Notification')),
  Chat: React.lazy(() => import('../Icons/Chat')),
  Heart: React.lazy(() => import('../Icons/Heart')),
  Heart2: React.lazy(() => import('../Icons/Heart2')),
  Paper: React.lazy(() => import('../Icons/Paper')),
  PaperPlus: React.lazy(() => import('../Icons/PaperPlus')),
  PaperNegative: React.lazy(() => import('../Icons/PaperNegative')),
  PaperFall: React.lazy(() => import('../Icons/PaperFall')),
  PaperDownload: React.lazy(() => import('../Icons/PaperDownload')),
  PaperUpload: React.lazy(() => import('../Icons/PaperUpload')),
  Send: React.lazy(() => import('../Icons/Send')),
  Password: React.lazy(() => import('../Icons/Password')),
  Swap: React.lazy(() => import('../Icons/Swap')),
  Work: React.lazy(() => import('../Icons/Work')),
  Scan: React.lazy(() => import('../Icons/Scan')),
  Activity: React.lazy(() => import('../Icons/Activity')),
  Calendar: React.lazy(() => import('../Icons/Calendar')),
  Message: React.lazy(() => import('../Icons/Message')),
  Video: React.lazy(() => import('../Icons/Video')),
  Plus: React.lazy(() => import('../Icons/Plus')),
  Chart: React.lazy(() => import('../Icons/Chart')),
  Game: React.lazy(() => import('../Icons/Game')),
  Bag: React.lazy(() => import('../Icons/Bag')),
  Bag2: React.lazy(() => import('../Icons/Bag2')),
  TicketStar: React.lazy(() => import('../Icons/TicketStar')),
  MoreCircle: React.lazy(() => import('../Icons/MoreCircle')),
  MoreSquare: React.lazy(() => import('../Icons/MoreSquare')),
  Discount: React.lazy(() => import('../Icons/Discount')),
  Buy: React.lazy(() => import('../Icons/Buy')),
  InfoCircle: React.lazy(() => import('../Icons/InfoCircle')),
  InfoSquare: React.lazy(() => import('../Icons/InfoSquare')),
  Danger: React.lazy(() => import('../Icons/Danger')),
  CloseSquare: React.lazy(() => import('../Icons/CloseSquare')),
  TickSquare: React.lazy(() => import('../Icons/TickSquare')),
  Discovery: React.lazy(() => import('../Icons/Discovery')),
  Location: React.lazy(() => import('../Icons/Location')),
  Document: React.lazy(() => import('../Icons/Document')),
  Setting: React.lazy(() => import('../Icons/Setting')),
  TimeSquare: React.lazy(() => import('../Icons/TimeSquare')),
  TimeCircle: React.lazy(() => import('../Icons/TimeCircle')),
  VolumeUp: React.lazy(() => import('../Icons/VolumeUp')),
  VolumeDown: React.lazy(() => import('../Icons/VolumeDown')),
  VolumeOff: React.lazy(() => import('../Icons/VolumeOff')),
  Star: React.lazy(() => import('../Icons/Star')),
  Ticket: React.lazy(() => import('../Icons/Ticket')),
  Camera: React.lazy(() => import('../Icons/Camera')),
  User: React.lazy(() => import('../Icons/User')),
  AddUser: React.lazy(() => import('../Icons/AddUser')),
  TwoUsers: React.lazy(() => import('../Icons/TwoUsers')),
  People: React.lazy(() => import('../Icons/People')),
  Login: React.lazy(() => import('../Icons/Login')),
  Logout: React.lazy(() => import('../Icons/Logout')),
  Download: React.lazy(() => import('../Icons/Download')),
  Upload: React.lazy(() => import('../Icons/Upload')),
  Voice: React.lazy(() => import('../Icons/Voice')),
  Voice2: React.lazy(() => import('../Icons/Voice2')),
  Delete: React.lazy(() => import('../Icons/Delete')),
  Edit: React.lazy(() => import('../Icons/Edit')),
  EditSquare: React.lazy(() => import('../Icons/EditSquare')),
  Play: React.lazy(() => import('../Icons/Play')),
  ShieldDone: React.lazy(() => import('../Icons/ShieldDone')),
  ShieldFall: React.lazy(() => import('../Icons/ShieldFall')),
  Show: React.lazy(() => import('../Icons/Show')),
  Hide: React.lazy(() => import('../Icons/Hide')),
  Filter: React.lazy(() => import('../Icons/Filter')),
  Filter2: React.lazy(() => import('../Icons/Filter2')),
  Image: React.lazy(() => import('../Icons/Image')),
  Image2: React.lazy(() => import('../Icons/Image2')),
  Call: React.lazy(() => import('../Icons/Call')),
  Calling: React.lazy(() => import('../Icons/Calling')),
  CallMissed: React.lazy(() => import('../Icons/CallMissed')),
  CallSilent: React.lazy(() => import('../Icons/CallSilent')),
  Lock: React.lazy(() => import('../Icons/Lock')),
  Unlock: React.lazy(() => import('../Icons/Unlock')),
  ChevronDownCircle: React.lazy(() => import('../Icons/ChevronDownCircle')),
  ChevronRightCircle: React.lazy(() => import('../Icons/ChevronRightCircle')),
  ChevronUpCircle: React.lazy(() => import('../Icons/ChevronUpCircle')),
  ChevronLeftCircle: React.lazy(() => import('../Icons/ChevronLeftCircle')),
  ChevronDown: React.lazy(() => import('../Icons/ChevronDown')),
  ChevronRight: React.lazy(() => import('../Icons/ChevronRight')),
  ChevronUp: React.lazy(() => import('../Icons/ChevronUp')),
  ChevronLeft: React.lazy(() => import('../Icons/ChevronLeft')),
  ArrowDownSquare: React.lazy(() => import('../Icons/ArrowDownSquare')),
  ArrowRightSquare: React.lazy(() => import('../Icons/ArrowRightSquare')),
  ArrowUpSquare: React.lazy(() => import('../Icons/ArrowUpSquare')),
  ArrowLeftSquare: React.lazy(() => import('../Icons/ArrowLeftSquare')),
  ArrowDown: React.lazy(() => import('../Icons/ArrowDown')),
  ArrowRight: React.lazy(() => import('../Icons/ArrowRight')),
  ArrowUp: React.lazy(() => import('../Icons/ArrowUp')),
  ArrowLeft: React.lazy(() => import('../Icons/ArrowLeft')),
  CaretRight: React.lazy(() => import('../Icons/CaretRight')),
  CaretDown: React.lazy(() => import('../Icons/CaretDown')),
  CaretUp: React.lazy(() => import('../Icons/CaretUp')),
  CaretLeft: React.lazy(() => import('../Icons/CaretLeft'))
}

const Iconly = ({
  primaryColor,
  secondaryColor,
  strokeWidth,
  opacity,
  set,
  size,
  name,
  style
}) => {
  const Icon = icons[name]
  if (!Icon) {
    throw new Error(`Icon '${name}' doesn't exists in react-iconly`)
  }
  return (
    <Suspense fallback={<span>{name}</span>}>
      <Icon
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        strokeWidth={strokeWidth}
        opacity={opacity}
        set={set}
        size={size}
        style={style}
      />
    </Suspense>
  )
}

export default Iconly
