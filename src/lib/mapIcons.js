import React from 'react'
import * as IconPack from '../Icons'

const icons = {
  Search: IconPack.Search,
  Folder: IconPack.Folder,
  Wallet: IconPack.Wallet,
  Graph: IconPack.Graph,
  Bookmark: IconPack.Bookmark,
  Category: IconPack.Category,
  Home: IconPack.Home,
  Notification: IconPack.Notification,
  Chat: IconPack.Chat,
  Heart: IconPack.Heart,
  Heart2: IconPack.Heart2,
  Paper: IconPack.Paper,
  PaperPlus: IconPack.PaperPlus,
  PaperNegative: IconPack.PaperNegative,
  PaperFail: IconPack.PaperFail,
  PaperDownload: IconPack.PaperDownload,
  PaperUpload: IconPack.PaperUpload,
  Send: IconPack.Send,
  Password: IconPack.Password,
  Swap: IconPack.Swap,
  Work: IconPack.Work,
  Scan: IconPack.Scan,
  Activity: IconPack.Activity,
  Calendar: IconPack.Calendar,
  Message: IconPack.Message,
  Video: IconPack.Video,
  Plus: IconPack.Plus,
  Chart: IconPack.Chart,
  Game: IconPack.Game,
  Bag: IconPack.Bag,
  Bag2: IconPack.Bag2,
  TicketStar: IconPack.TicketStar,
  MoreCircle: IconPack.MoreCircle,
  MoreSquare: IconPack.MoreSquare,
  Discount: IconPack.Discount,
  Buy: IconPack.Buy,
  InfoCircle: IconPack.InfoCircle,
  InfoSquare: IconPack.InfoSquare,
  Danger: IconPack.Danger,
  CloseSquare: IconPack.CloseSquare,
  TickSquare: IconPack.TickSquare,
  Discovery: IconPack.Discovery,
  Location: IconPack.Location,
  Document: IconPack.Document,
  Setting: IconPack.Setting,
  TimeSquare: IconPack.TimeSquare,
  TimeCircle: IconPack.TimeCircle,
  VolumeUp: IconPack.VolumeUp,
  VolumeDown: IconPack.VolumeDown,
  VolumeOff: IconPack.VolumeOff,
  Star: IconPack.Star,
  Ticket: IconPack.Ticket,
  Camera: IconPack.Camera,
  User: IconPack.User,
  AddUser: IconPack.AddUser,
  TwoUsers: IconPack.TwoUsers,
  People: IconPack.People,
  Login: IconPack.Login,
  Logout: IconPack.Logout,
  Download: IconPack.Download,
  Upload: IconPack.Upload,
  Voice: IconPack.Voice,
  Voice2: IconPack.Voice2,
  Delete: IconPack.Delete,
  Edit: IconPack.Edit,
  EditSquare: IconPack.EditSquare,
  Play: IconPack.Play,
  ShieldDone: IconPack.ShieldDone,
  ShieldFail: IconPack.ShieldFail,
  Show: IconPack.Show,
  Hide: IconPack.Hide,
  Filter: IconPack.Filter,
  Filter2: IconPack.Filter2,
  Image: IconPack.Image,
  Image2: IconPack.Image2,
  Call: IconPack.Call,
  Calling: IconPack.Calling,
  CallMissed: IconPack.CallMissed,
  CallSilent: IconPack.CallSilent,
  Lock: IconPack.Lock,
  Unlock: IconPack.Unlock,
  ChevronDownCircle: IconPack.ChevronDownCircle,
  ChevronRightCircle: IconPack.ChevronRightCircle,
  ChevronUpCircle: IconPack.ChevronUpCircle,
  ChevronLeftCircle: IconPack.ChevronLeftCircle,
  ChevronDown: IconPack.ChevronDown,
  ChevronRight: IconPack.ChevronRight,
  ChevronUp: IconPack.ChevronUp,
  ChevronLeft: IconPack.ChevronLeft,
  ArrowDownSquare: IconPack.ArrowDownSquare,
  ArrowRightSquare: IconPack.ArrowRightSquare,
  ArrowUpSquare: IconPack.ArrowUpSquare,
  ArrowLeftSquare: IconPack.ArrowLeftSquare,
  ArrowDown: IconPack.ArrowDown,
  ArrowRight: IconPack.ArrowRight,
  ArrowUp: IconPack.ArrowUp,
  ArrowLeft: IconPack.ArrowLeft,
  CaretRight: IconPack.CaretRight,
  CaretDown: IconPack.CaretDown,
  CaretUp: IconPack.CaretUp,
  CaretLeft: IconPack.CaretLeft
}

const Iconly = ({
  className,
  primaryColor,
  secondaryColor,
  strokeWidth,
  opacity,
  set,
  size,
  name,
  style,
  ...props
}) => {
  const Icon = icons[name]
  if (!Icon) {
    throw new Error(`Icon '${name}' doesn't exists in react-iconly`)
  }
  return (
    <Icon
      className={className}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      strokeWidth={strokeWidth}
      opacity={opacity}
      set={set}
      size={size}
      style={style}
      {...props}
    />
  )
}

export default Iconly
