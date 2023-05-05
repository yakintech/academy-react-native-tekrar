import { View, Text, SectionList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductListWithSectionList = () => {

    const [products, setproducts] = useState<any[]>([])

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {

                let responseData = res.data;
                let sectionData: any[] = []

                responseData.forEach((item: any) => {

                    let sectionControl = sectionData.find(q => q.title == item.categoryId)
                    //Eğer section daha önce oluşmamışsa

                    if (!sectionControl) {
                        let newSectiondata = {
                            title: item.categoryId,
                            data: [
                                {
                                    name: item.name,
                                    unitPrice: item.unitPrice
                                }
                            ]
                        }
                        sectionData.push(newSectiondata);
                    }
                    else {
                        sectionControl.data.push({
                            name: item.name,
                            unitPrice: item.unitPrice
                        })
                    }
                });
                
                setproducts(sectionData);

            })
    }, [])


    return (<>
        <SectionList
            sections={products}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View>
                    <Text style={{fontSize:20}}>{item.name}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={{fontSize:35}}>{title}</Text>
            )}
        />
    </>)
}

export default ProductListWithSectionList




const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    }
];

const data2 = [
    {
        title: 3,
        data: [{}, {}, {}]
    },
    {
        title: 4,
        data: [{}, {}, {}]
    }
]