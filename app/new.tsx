import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Icon from '@expo/vector-icons/Feather'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { Link } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

export default function New() {
  const { bottom, top } = useSafeAreaInsets()

  const [isPublic, setIsPublic] = useState(false)

  return (
    <ScrollView
      className={`flex-1 px-8 `}
      contentContainerStyle={{ paddingBottom: bottom + 20, paddingTop: top }}
    >
      <View className="flex-row items-center justify-between pt-4">
        <NLWLogo />

        <Link asChild href="/memories">
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500 ">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
            thumbColor={isPublic ? '#9b79ea' : '#9E9EA0'}
            trackColor={{ false: '#767577', true: '#372560' }}
          />
          <Text className="font-body text-base text-gray-200">
            Tornar memoria pública
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20"
        >
          <View className="flex-row items-center gap-2">
            <Icon name="image" color="#FFF" />
            <Text className="font-body text-sm text-gray-200">
              Adicionar foto ou video
            </Text>
          </View>
        </TouchableOpacity>

        <TextInput
          multiline
          textAlignVertical="top"
          className="p-0 font-body text-lg text-gray-50"
          placeholderTextColor="#56565A"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
        <TouchableOpacity
          activeOpacity={0.7}
          className="items-center justify-center self-end rounded-full bg-green-500 px-5 py-2"
          // onPress={() => signInWithGithub()}
        >
          <Text className="mt-1 font-alt text-lg text-black">Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
