export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          address_id: string
          latitude: number
          longitude: number
          post_id: string
        }
        Insert: {
          address_id: string
          latitude: number
          longitude: number
          post_id: string
        }
        Update: {
          address_id?: string
          latitude?: number
          longitude?: number
          post_id?: string
        }
      }
      image_tags: {
        Row: {
          name: string
          post_image_id: string
          tag_id: string
        }
        Insert: {
          name: string
          post_image_id: string
          tag_id: string
        }
        Update: {
          name?: string
          post_image_id?: string
          tag_id?: string
        }
      }
      like_posts: {
        Row: {
          liked_at: string | null
          post_id: string
          user_id: string
        }
        Insert: {
          liked_at?: string | null
          post_id: string
          user_id: string
        }
        Update: {
          liked_at?: string | null
          post_id?: string
          user_id?: string
        }
      }
      post_images: {
        Row: {
          image_path: string
          post_id: string
          post_image_id: string
        }
        Insert: {
          image_path: string
          post_id: string
          post_image_id: string
        }
        Update: {
          image_path?: string
          post_id?: string
          post_image_id?: string
        }
      }
      posts: {
        Row: {
          comment: string | null
          created_at: string
          post_id: string
          posted_at: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          post_id: string
          posted_at?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          post_id?: string
          posted_at?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
      }
      snap_routes: {
        Row: {
          created_at: string | null
          snap_route_id: string
          title: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          snap_route_id: string
          title: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          snap_route_id?: string
          title?: string
          user_id?: string
        }
      }
      snap_routes_posts: {
        Row: {
          post_id: string
          snap_route_id: string
        }
        Insert: {
          post_id: string
          snap_route_id: string
        }
        Update: {
          post_id?: string
          snap_route_id?: string
        }
      }
      users: {
        Row: {
          email: string
          name: string
          registered_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          email: string
          name: string
          registered_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          email?: string
          name?: string
          registered_at?: string
          updated_at?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
