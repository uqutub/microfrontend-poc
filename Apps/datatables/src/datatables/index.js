import './index.css';

function Datatbles({datatable}) {
    let arr = datatable || [
        { first: 'F1', last: 'L1', email: 'E1' },
        { first: 'F2', last: 'L2', email: 'E2' },
        { first: 'F3', last: 'L3', email: 'E3' },
        { first: 'F4', last: 'L4', email: 'E4' },
        { first: 'F5', last: 'L5', email: 'E5' },
        { first: 'F6', last: 'L6', email: 'E6' },
    ];
    return (
        <div className="datatable-mfe">
            <h1>Datatable MFE</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map(i => (
                        <tr>
                            <td>{i.first}</td>
                            <td>{i.last}</td>
                            <td>{i.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Datatbles;
