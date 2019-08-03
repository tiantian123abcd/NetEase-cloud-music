import discoverState from '../../state/discover'

export default function (state=discoverState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));

    return state ;
}