import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteToStore = () => {
    const sendData = () => {
        try{
            firebase
                .firestore()
                .collection('myColl0ection')
                .doc('my_document')
                .set({
                    string_data: '',
                    number_data: 2,
                    boolean_data: true,
                    map_data: { stringInMap: 'Hi', numberInMap: 7 },
                    array_data: [ 'text', 7 ],
                    null_data: null,
                    time_stamp: firebase.firestore.Timestamp.fromDate(new Date('November 22, 2021')),
                    geo_point: new firebase.firestore.GeoPoint(1, 2),
                })
                .then(alert('Data was successfully stored'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <button onClick={sendData}>
            Send data
        </button>
    )
    }

export default WriteToStore;