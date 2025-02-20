// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { UserRequest as _user_UserRequest, UserRequest__Output as _user_UserRequest__Output } from '../user/UserRequest';
import type { UserResponse as _user_UserResponse, UserResponse__Output as _user_UserResponse__Output } from '../user/UserResponse';

export interface UserServiceClient extends grpc.Client {
  GetUser(argument: _user_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_UserRequest, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_UserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_UserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_UserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_UserRequest, callback: grpc.requestCallback<_user_UserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  GetUser: grpc.handleUnaryCall<_user_UserRequest__Output, _user_UserResponse>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  GetUser: MethodDefinition<_user_UserRequest, _user_UserResponse, _user_UserRequest__Output, _user_UserResponse__Output>
}
