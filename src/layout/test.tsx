import * as React from 'react';

interface Props {
    value: string;
}

export default class Test extends React.Component<Props> {
    public render() {
        const { value } = this.props;
        return (
            <div>{value}</div>
        );
    }
}