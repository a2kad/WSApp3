import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PolitiqueScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphText}>
                        Web Solidarité a construit l'application Web Solidarité sous forme d'application gratuite. Ce SERVICE est fourni gratuitement par Web Solidarité et est destiné à être utilisé tel quel.
                    </Text>
                    <Text style={styles.paragraphText}>
                        Cette page est utilisée pour informer les visiteurs de mes politiques en matière de collecte, d'utilisation et de divulgation d'informations personnelles si quelqu'un décide d'utiliser mon service.
                    </Text>
                    <Text style={styles.paragraphText}>
                        Si vous choisissez d'utiliser mon service, vous acceptez la collecte et l'utilisation d'informations en relation avec cette politique. Les informations personnelles que je collecte sont utilisées pour fournir et améliorer le service. Je n’utiliserai ni ne partagerai vos informations avec qui que ce soit, sauf dans les cas décrits dans la présente politique de confidentialité.
                    </Text>
                    <Text style={styles.paragraphText}>
                        Les termes utilisés dans la présente Politique de Confidentialité ont la même signification que dans nos Conditions Générales, qui sont accessibles sur Web Solidarité, sauf définition contraire dans la présente Politique de Confidentialité.
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                        Collecte et utilisation des informations
                    </Text>
                    <Text style={styles.paragraphText}>
                        Pour une meilleure expérience, lors de l'utilisation de notre Service, je peux vous demander de nous fournir certaines informations personnellement identifiables. Les informations que je demande seront conservées sur votre appareil et ne seront en aucun cas collectées par moi.
                    </Text>
                    <Text style={styles.paragraphText}>
                        L'application utilise des services tiers qui peuvent collecter des informations utilisées pour vous identifier.
                    </Text>
                    <Text style={styles.paragraphText}>
                        Lien vers la politique de confidentialité des prestataires de services tiers utilisés par l'application :
                    </Text>
                    <Text style={styles.paragraphList}>- Google Play Services</Text>
                    <Text style={styles.paragraphList}>- Expo</Text>
                </View>
                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>Données du journal</Text>
                    <Text style={styles.paragraphText}>
                        Je tiens à vous informer que chaque fois que vous utilisez mon service, en cas d'erreur dans l'application, je collecte des données et des informations (via des produits tiers) sur votre téléphone appelées Log Data. Ces données de journal peuvent inclure des informations telles que l'adresse de protocole Internet (« IP ») de votre appareil, le nom de l'appareil, la version du système d'exploitation, la configuration de l'application lors de l'utilisation de mon service, l'heure et la date de votre utilisation du service et d'autres statistiques.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                        Cookies
                    </Text>
                    <Text style={styles.paragraphText}>
                        Les cookies sont des fichiers contenant une petite quantité de données qui sont couramment utilisés comme identifiants uniques anonymes. Ceux-ci sont envoyés à votre navigateur depuis les sites Internet que vous visitez et sont stockés dans la mémoire interne de votre appareil.
                    </Text>
                    <Text style={styles.paragraphText}>
                        Ce Service n'utilise pas explicitement ces « cookies ». Cependant, l'application peut utiliser du code et des bibliothèques tiers qui utilisent des « cookies » pour collecter des informations et améliorer leurs services. Vous avez la possibilité d'accepter ou de refuser ces cookies et de savoir quand un cookie est envoyé sur votre appareil. Si vous choisissez de refuser nos cookies, vous ne pourrez peut-être pas utiliser certaines parties de ce Service.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                        Les fournisseurs de services
                    </Text>
                    <Text style={styles.paragraphText}>
                        Je peux employer des sociétés tierces et des particuliers pour les raisons suivantes :
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour faciliter notre Service;
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour fournir le Service en notre nom;
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour exécuter des services liés au Service; ou
                    </Text>
                    <Text style={styles.paragraphList}>
                        - Pour nous aider à analyser la manière dont notre Service est utilisé.
                    </Text>
                    <Text></Text>
                    <Text style={styles.paragraphText}>
                        Je souhaite informer les utilisateurs de ce Service que ces tiers ont accès à leurs Informations Personnelles. La raison est d’accomplir les tâches qui leur sont assignées en notre nom. Ils sont toutefois tenus de ne pas divulguer ni utiliser ces informations à d’autres fins.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Sécurité
                    </Text>
                    <Text style={styles.paragraphText}>
                    J'apprécie la confiance que vous me témoignez en nous communiquant vos informations personnelles, et nous nous efforçons donc d'utiliser des moyens commercialement acceptables pour les protéger. Mais n'oubliez pas qu'aucune méthode de transmission sur l'internet ou de stockage électronique n'est sûre et fiable à 100 % et que je ne peux pas garantir une sécurité absolue.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Liens vers d'autres sites
                    </Text>
                    <Text style={styles.paragraphText}>
                    Ce service peut contenir des liens vers d'autres sites. Si vous cliquez sur le lien d'un tiers, vous serez dirigé vers ce site. Notez que ces sites externes ne sont pas gérés par moi. Par conséquent, je vous conseille vivement de consulter la politique de confidentialité de ces sites web. Je n'ai aucun contrôle et n'assume aucune responsabilité quant au contenu, aux politiques de confidentialité ou aux pratiques des sites ou services tiers.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Vie privée des enfants
                    </Text>
                    <Text style={styles.paragraphText}>
                    Ces services ne s'adressent pas aux personnes âgées de moins de 13 ans. Je ne recueille pas sciemment d'informations personnellement identifiables auprès d'enfants âgés de moins de 13 ans. Si je découvre qu'un enfant de moins de 13 ans m'a fourni des informations personnelles, je les supprime immédiatement de nos serveurs. Si vous êtes un parent ou un tuteur et que vous savez que votre enfant nous a fourni des informations personnelles, veuillez me contacter afin que je puisse prendre les mesures nécessaires.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Modifications de la présente politique de confidentialité
                    </Text>
                    <Text style={styles.paragraphText}>
                    Je peux mettre à jour notre politique de confidentialité de temps à autre. Il vous est donc conseillé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications. Je vous informerai de toute modification en publiant la nouvelle politique de confidentialité sur cette page.
                    </Text>
                    <Text style={styles.paragraphText}>
                    Cette politique entre en vigueur le 17/10/2023.
                    </Text>
                </View>

                <View style={styles.paragraph}>
                    <Text style={styles.paragraphTitle}>
                    Nous contacter
                    </Text>
                    <Text style={styles.paragraphText}>
                    Si vous avez des questions ou des suggestions concernant ma politique de confidentialité, n'hésitez pas à me contacter à l'adresse <Text style={{fontWeight:'bold'}}>websolidarite.app@gmail.com</Text>.
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text className="text-xl font-bold text-center text-gray-700">Retour</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,

    },
    paragraph: {
        marginBottom: 20
    },
    paragraphTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    paragraphText: {
        fontSize: 17,
        marginBottom: 20
    },
    paragraphList: {
        fontSize: 17,
        marginLeft: 20
    },
})