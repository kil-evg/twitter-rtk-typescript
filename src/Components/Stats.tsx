import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeStats } from '../features/statSlice';
import { Avatar } from './Avatar'
import { useDispatch, useSelector } from 'react-redux';


export const Stats = () => {
    const {followers, following} = useAppSelector(state => state.stats);
    const name = useAppSelector(state => state.user.name);
    const dispatch = useAppDispatch();

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => dispatch(changeStats({statsType: 'followers', sum: 1}))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats({statsType: 'followers', sum: -1}));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(changeStats({statsType: 'following', sum: 1}))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(changeStats({statsType: 'following', sum: -1}));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}
