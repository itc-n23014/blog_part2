import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConvertDate = props => {
  return (
    <time dateTime={props.dateISO}>
      {format(parseISO(props.dateISO), 'yyyy年MM月dd日', { locale: ja })}
    </time>
  )
}
export default ConvertDate
