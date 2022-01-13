import LinkedList from '../src/dataStructures/LinkedList';

test('LinkedList', () => {
    const linkedList = new LinkedList(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);

    console.log('linkedList', linkedList.toString());
    
    expect(linkedList.contains(1)).toBe(true);
})